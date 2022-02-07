import { useRef, useState } from "react";
import MyHeader from "../components/MyHeader";
import ListPlus from "../components/ListPlus";
import Lists from "../components/Lists";

const Home = () => {
  const [curDate] = useState(new Date());
  const [data, setData] = useState([]);
  const dataId = useRef(1);
  const headText = `${curDate.getFullYear()}년 ${
    curDate.getMonth() + 1
  }월 ${curDate.getDate()}일`;

  const onCreate = (content) => {
    const newItem = {
      content,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([...data, newItem]);
  };
  return (
    <>
      <MyHeader headText={headText} />
      <ListPlus onCreate={onCreate} />
      <Lists list={data} />
    </>
  );
};

export default Home;
