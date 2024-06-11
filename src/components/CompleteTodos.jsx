export const CompleteTodos = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {completeTodos.map((doneTodo, index) => (
          <li key={doneTodo}>
            <div className="list-row">
              <p className="todo-item">{doneTodo}</p>
              <button
                onClick={() => {
                  onClickBack(index);
                }}
              >
                戻す
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
