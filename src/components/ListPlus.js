import { useState } from "react";

const ListPlus = () => {
  const [content, setContent] = useState("");
  const onCreate = () => {};
  return (
    <div className="ListPlus">
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="할 일을 입력해주세요!"
      ></input>
      <button onClick={onCreate}>추가하기</button>
    </div>
  );
};
export default ListPlus;
