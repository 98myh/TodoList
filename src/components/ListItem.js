import React, { useState } from "react";

const ListItem = ({ onCheck, onRemove, content, id }) => {
  const [check, setCheck] = useState(true);
  const toggleCheck = () => {
    setCheck(!check);
  };

  return (
    <div className="ListItem">
      <div className="info">
        <span className={check ? "noneLine" : "checkLine"}>
          {id}. {content}
        </span>
        <button
          className="checkBtn"
          onClick={() => {
            // if (window.confirm(`${id}번째 할 일을 체크하시겠습니까?`)) {
            toggleCheck();
            onCheck(id);
            //}
          }}
        >
          체크
        </button>
        <button
          className="deleteBtn"
          onClick={() => {
            if (window.confirm(`${id}번째 할 일을 정말 삭제하시겠습니까?`)) {
              onRemove(id);
            }
          }}
        >
          삭제
        </button>
      </div>
    </div>
  );
};
export default React.memo(ListItem);
