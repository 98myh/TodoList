import { useContext } from "react";
import { stateContext } from "../App";

import ListItem from "./ListItem";
const Lists = () => {
  const list = useContext(stateContext);
  return (
    <div className="Lists">
      {list.length !== 0 ? (
        <div>
          <h3>오늘 할일</h3>
          <div>
            {list.map((it) => (
              <ListItem key={it.id} {...it} />
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <img src={process.env.PUBLIC_URL + `assets/doit.png`} alt="ToDo" />
    </div>
  );
};
Lists.defaultProps = {
  list: [],
};

export default Lists;
