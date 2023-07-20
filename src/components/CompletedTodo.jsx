import React from "react";

const style = {
  backgroundColor: "#ffffe0",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const CompletedTodo = (props) => {
  const { completedTodos, onClick } = props;
  return (
    <div style={style}>
      <p className="title">完了済のTODO</p>
      <ul>
        {completedTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClick(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
