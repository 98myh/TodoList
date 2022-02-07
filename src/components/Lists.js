import ListItem from "./ListItem";

const Lists = ({ list }) => {
  console.log(list);
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
    </div>
  );
};
Lists.defaultProps = {
  list: [],
};

export default Lists;
