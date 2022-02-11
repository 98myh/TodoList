import React, { useCallback, useEffect, useReducer, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }

    case "CREATE": {
      const newItem = {
        ...action.data,
      };
      newState = [...state, newItem];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "CHECK": {
      newState = state.map((it) => it);
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("todo", JSON.stringify(newState));
  return newState;
};

export const stateContext = React.createContext();
export const DispatchContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(1);

  useEffect(() => {
    const localData = localStorage.getItem("todo");
    if (localData) {
      const List = JSON.parse(localData);
      if (List.length >= 1) {
        dataId.current = parseInt(List[List.length - 1].id) + 1;
        dispatch({ type: "INIT", data: List });
      }
    }
  }, []);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: { content, id: dataId.current },
    });
    dataId.current += 1;
  }, []);

  const onRemove = useCallback((targetId) => {
    dispatch({ type: "REMOVE", targetId });
  }, []);

  const onCheck = useCallback(() => {
    dispatch({ type: "CHECK" });
  }, []);

  return (
    <stateContext.Provider value={data}>
      <DispatchContext.Provider value={{ onCreate, onRemove, onCheck }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DispatchContext.Provider>
    </stateContext.Provider>
  );
}

export default App;
