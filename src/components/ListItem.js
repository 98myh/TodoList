const ListItem = ({ content, id }) => {
  return (
    <div className="ListItem">
      <div className="info">
        <span>
          {id}. {content}
        </span>
        <button className="checkBtn">체크</button>
        <button className="deleteBtn">삭제</button>
      </div>
    </div>
  );
};
export default ListItem;
