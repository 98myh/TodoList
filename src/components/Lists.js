import ListItem from "./ListItem";
const Lists = ({ onCheck, onRemove, list }) => {
  return (
    <div className="Lists">
      {list.length !== 0 ? (
        <div>
          <h3>오늘 할일</h3>
          <div>
            {list.map((it) => (
              <ListItem
                key={it.id}
                {...it}
                onRemove={onRemove}
                onCheck={onCheck}
              />
            ))}
          </div>
          <img src={process.env.PUBLIC_URL + `assets/doit.png`} />
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
