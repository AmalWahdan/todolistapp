import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./Todolist.css";

const TodoList = ({
  todoArr,
  deletetask,
  taskState,
  ShowTaskForm,
  showTaskDetails,
}) => {
  return (
    <div>
      <div className="text-center pt-3 pb-2">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
          alt="Check"
          width="60"
        />
        <h2 className="my-4">Task List</h2>
      </div>

      <table className="table text-white mb-0">
        <thead>
          <tr>
            <th scope="col">Team Member</th>
            <th scope="col">Task</th>
            <th scope="col">State</th>
            <th scope="col">Priority</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todoArr.map((Item, index) => (
            <TodoItem
              key={Item.id}
              id={Item.id}
              img={Item.img}
              body={Item.name}
              state={Item.state}
              priority={Item.priority}
              deletetask={deletetask}
              taskState={taskState}
              showTaskDetails={showTaskDetails}
            />
          ))}
        </tbody>
      </table>
      <div className="text-center">
        <button className="btn btn-primary my-5 " onClick={ShowTaskForm}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TodoList;
