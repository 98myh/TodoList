import { useRef, useState } from "react";

const ListPlus = ({ onCreate }) => {
  const contentRef = useRef();
  const [content, setContent] = useState("");

  const contentSubmit = () => {
    if (content.length < 1) {
      alert("1글자 이상 입력해 주세요!");
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    console.log(content);
    alert("저장성공");
    setContent("");
  };

  return (
    <div className="ListPlus">
      <input
        ref={contentRef}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="할 일을 입력해주세요!"
      />
      <button onClick={contentSubmit}>추가하기</button>
    </div>
  );
};
export default ListPlus;
