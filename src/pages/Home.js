import { useState } from "react";
import MyHeader from "../components/MyHeader";
import Lists from "../components/Lists";
import ListPlus from "../components/ListPlus";

const Home = () => {
  const [curDate] = useState(new Date());
  const [text, setText] = useState("");
  const headText = `${curDate.getFullYear()}년 ${
    curDate.getMonth() + 1
  }월 ${curDate.getDate()}일`;
  return (
    <>
      <MyHeader headText={headText} />
      <ListPlus />
      <Lists />
    </>
  );
};

export default Home;
