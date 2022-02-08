import { useCallback, useRef, useState } from "react";
import MyHeader from "../components/MyHeader";
import ListEdit from "../components/ListEdit";
import Lists from "../components/Lists";

const Home = () => {
  const [curDate] = useState(new Date());
  const [data, setData] = useState([]);
  const dataId = useRef(1);
  const headText = `${curDate.getFullYear()}년 ${
    curDate.getMonth() + 1
  }월 ${curDate.getDate()}일`;

  const onCreate = useCallback((content) => {
    const newItem = {
      content,
      id: dataId.current,
    };
    dataId.current += 1;
    setData((data) => [...data, newItem]); //함수형 업데이트
  }, []);
  const onRemove = useCallback((targetId) => {
    setData((data) => data.filter((it) => it.id !== targetId));
  }, []);

  const onCheck = useCallback(() => {
    setData((data) => data.map((it) => it));
  }, []);
  return (
    <>
      <MyHeader headText={headText} />
      <ListEdit onCreate={onCreate} />
      <Lists list={data} onRemove={onRemove} onCheck={onCheck} />
    </>
  );
};

export default Home;
