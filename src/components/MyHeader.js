const MyHeader = ({ headText }) => {
  return (
    <div className="myheader">
      <h1>Todo List</h1>
      <h2 className="head_text">{headText}</h2>
    </div>
  );
};
export default MyHeader;
