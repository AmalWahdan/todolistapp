import { useState } from "react";

const TaskForm = ({ addTaskHandler, names, ids, ShowTaskForm }) => {
  const [selectedId, setSelectedId] = useState("");

  const [newTask, setNewTask] = useState({
    selectid: null,
    body: "",
    details: "",
    priority: 3,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "selectid") {
      setSelectedId(value);
    } else {
      setNewTask((prevTask) => ({
        ...prevTask,
        [name]: value,
      }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const selectedName = names[selectedId];
    if (selectedName) {
      const taskValues = {
        selectid: selectedId,
        body: newTask.body,
        details: newTask.details,
        priority: newTask.priority,
      };
      ShowTaskForm();
      addTaskHandler(taskValues);
    }
    setSelectedId("");
    setNewTask({
      selectid: null,
      body: "",
      details: "",
      priority: 3,
    });
  };

  return (
    <form onSubmit={handleFormSubmit} className="ms-5 w-75 align-middle">
      <div className="text-center pt-3 pb-1 bg-transparent">
        <img
          src="https://www.bootstraplegal.com/wp-content/uploads/2019/05/icon-form-entities.png"
          alt="add"
          width="100"
          className="rounded-circle "
        />
        <h2 className="my-4">Task Form</h2>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInput1" className="form-label"></label>
        <select
          name="selectid"
          value={selectedId}
          onChange={handleInputChange}
          className="form-select"
          id="exampleInput1"
        >
          <option value="">Select Person</option>
          {names.map((name, index) => (
            <option key={ids[index]} value={ids[index]}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInput2" className="form-label">
          Body
        </label>
        <input
          type="text"
          name="body"
          value={newTask.body}
          onChange={handleInputChange}
          className="form-control"
          id="exampleInput2"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInput3" className="form-label">
          Details
        </label>
        <textarea
          name="details"
          value={newTask.details}
          onChange={handleInputChange}
          className="form-control"
          id="exampleInput3"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInput4" className="form-label">
          Priority
        </label>
        <select
          name="priority"
          value={newTask.priority}
          onChange={handleInputChange}
          className="form-select"
          id="exampleInput4"
        >
          <option value={1}>High priority</option>
          <option value={2}>Middle priority</option>
          <option value={3}>Low priority</option>
        </select>
      </div>

      <button type="submit" className="btn btn-dark">
        Add Task
      </button>
      <a onClick={ShowTaskForm} className="btn">
        <i
          className="fa fa-arrow-circle-left text-dark m-3 "
          aria-hidden="true"
        >
          <span className="text-white ms-1 ">back To Tasks List</span>
        </i>
      </a>
    </form>
  );
};

export default TaskForm;
