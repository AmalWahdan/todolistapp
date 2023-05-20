import React, { Fragment, useEffect, useState } from "react";
import TodoList from "./Components/Todolist";
import TaskForm from "./Components/Form";
import TaskDetails from "./Components/TaskDetails";

const DUMMY_TODO = [
  {
    id: 1,
    img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
    name: "Alice Mayer",
    body: "Call Sam For payments",
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not
      only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.`,
    state: true,
    priority: 1,
  },
  {
    id: 2,
    img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp",
    name: "Kate Moss",
    body: "Make payment to Bluedart",
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not
      only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.`,
    state: 1,
    priority: 3,
  },
  {
    id: 3,
    img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp",
    name: "Danny McChain",
    body: "Office rent",
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not
      only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.`,
    state: true,
    priority: 2,
  },
  {
    id: 4,
    img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp",
    name: "Alexa Chung",
    body: "Office grocery shopping",
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not
      only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.`,
    state: true,
    priority: 1,
  },
  {
    id: 5,
    img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp",
    name: "Ben Smith",
    body: " Ask for Lunch to Clients",
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not
      only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.`,
    state: true,
    priority: 3,
  },
];

const App = () => {
  const [todoArr, setTodoArr] = useState(DUMMY_TODO);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [showTaskDetails, setShowTaskDetails] = useState(false);
  const [selectedTask, setselectedTask] = useState(null);
  const names = todoArr.map((task) => task.name);
  const ids = todoArr.map((task) => task.id);

  const deletetaskHandler = (taskId) => {
    let newTodoArr = todoArr.filter((Item) => Item.id !== taskId);
    setTodoArr(newTodoArr);
  };

  const taskStateHandler = (taskId) => {
    setTodoArr((prevTodoArr) => {
      return prevTodoArr.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            state: !task.state,
          };
        }
        return task;
      });
    });
  };

  const addTaskHandler = (newTask) => {
    const newTaskId = Math.max(...todoArr.map((task) => task.id)) + 1;
    const taskToAdd = todoArr.find(
      (item) => item.id === parseInt(newTask.selectid)
    );

    const task = {
      id: newTaskId,
      img: taskToAdd?.img || "",
      name: taskToAdd?.name || "",
      body: newTask.body,
      details: newTask.details,
      state: true,
      priority: newTask.priority,
    };

    setTodoArr((prevTodoArr) => [...prevTodoArr, task]);
  };

  const ShowTaskFormHandeler = () => {
    setShowTaskForm(!showTaskForm);
  };

  const showTaskDetailsHandler = (taskId) => {
    if (taskId !== null) {
      const selectedTodoObject = todoArr.find((Item) => Item.id === taskId);

      setselectedTask(selectedTodoObject);
      setShowTaskDetails(true);
    } else {
      setShowTaskDetails(false);
    }
  };

  return (
    <Fragment>
      <section className="vh-110 gradient-custom-2">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-10">
              <div className="card mask-custom">
                <div className="card-body p-4 text-white ">
                  {showTaskDetails ? (
                    <TaskDetails
                      showTaskDetailsHandeler={showTaskDetailsHandler}
                      selectedTask={selectedTask}
                    />
                  ) : (
                    <>
                      {showTaskForm ? (
                        <TaskForm
                          names={names}
                          ids={ids}
                          addTaskHandler={addTaskHandler}
                          ShowTaskForm={ShowTaskFormHandeler}
                        />
                      ) : (
                        <TodoList
                          todoArr={todoArr}
                          deletetask={deletetaskHandler}
                          taskState={taskStateHandler}
                          ShowTaskForm={ShowTaskFormHandeler}
                          showTaskDetails={showTaskDetailsHandler}
                        />
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default App;
