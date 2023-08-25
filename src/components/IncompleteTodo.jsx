import React from "react";

export const IncompleteTodo = (props) => {
  const { incompleteTodos, onClickDelete, onClickComplete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">incomplete TODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>OK</button>
              <button onClick={() => onClickDelete(index)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
