export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div className="input-area">
      <input
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
        disabled={disabled}
      />
      {!todoText ? (
        <button disabled onClick={onClick}>
          追加
        </button>
      ) : (
        <button disabled={disabled} onClick={onClick}>
          追加
        </button>
      )}
    </div>
  );
};
