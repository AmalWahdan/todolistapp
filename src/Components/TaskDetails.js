import Priority from "./prority";

const TaskDetails = ({ showTaskDetailsHandeler, selectedTask }) => {
  console.log(selectedTask);
  return (
    <div className="card text-dark">
      <div className="row justify-content-center my-5">
        <div className="col-lg-1 col-2 mb-1">
          <img
            src={selectedTask.img}
            alt="avatar 1"
            style={{ width: 45, height: "auto" }}
          />
        </div>
        <div className=" align-middle  col-lg-2 col-5 mt-2 ">
          <span>{selectedTask.name}</span>
        </div>
        <div className="align-middle  col-lg-2 col-4 mt-2 ">
          <Priority p={selectedTask.Priority} />
        </div>

        <div className="align-middle col-lg-3 col-7 mt-2">
          <span>{selectedTask.body}</span>
        </div>
        {selectedTask.state ? (
          <div className="align-middle col-lg-2 col-4 mt-2">
            <h6 className="mb-0">
              <span className="badge bg-danger">In Progress </span>
            </h6>
          </div>
        ) : (
          <div className="align-middle col-lg-2 col-4 mt-2">
            <h6 className="mb-0">
              <span className="badge bg-success">Done</span>
            </h6>
          </div>
        )}
        <div className="align-middle col-10 mt-5">
          <span>{selectedTask.details}</span>
        </div>
      </div>

      <a onClick={showTaskDetailsHandeler.bind(this, null)} className="btn">
        <i
          className="fa fa-arrow-circle-left text-dark m-3 "
          aria-hidden="true"
        >
          <span className="text-dark ms-1 ">back To Tasks List</span>
        </i>
      </a>
    </div>
  );
};

export default TaskDetails;
