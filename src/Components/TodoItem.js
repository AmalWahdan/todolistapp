//import formateDate from "../../utils/formateDate";

import Priority from "./prority";

const TodoItem = (props) => {
  const {
    id,
    img,
    name,
    body,
    state,
    priority,
    deletetask,
    taskState,
    showTaskDetails,
  } = props;

  return (
    <tr className="fw-normal">
      <th>
        <img src={img} alt="avatar 1" style={{ width: 45, height: "auto" }} />
        <span className="ms-2">{name}</span>
      </th>
      <td className="align-middle">
        <span>{body}</span>
      </td>
      {state ? (
        <td className="align-middle">
          <h6 className="mb-0">
            <span className="badge bg-danger">In Progress </span>
          </h6>
        </td>
      ) : (
        <td className="align-middle">
          <h6 className="mb-0">
            <span className="badge bg-success">Done</span>
          </h6>
        </td>
      )}
      <td className="align-middle">
        <Priority p={priority} />
      </td>
      <td className="align-middle">
        <a
          href="#!"
          data-mdb-toggle="tooltip"
          title="Done"
          onClick={taskState.bind(this, id)}
        >
          <i className="fa fa-check fa-lg text-warning me-3"></i>
        </a>
        <a
          href="#!"
          data-mdb-toggle="tooltip"
          title="details"
          onClick={showTaskDetails.bind(this, id)}
        >
          <i
            className="fa fa-info-circle text-dark me-3"
            aria-hidden="true"
          ></i>
        </a>
        <a
          href="#!"
          data-mdb-toggle="tooltip"
          title="Remove"
          onClick={deletetask.bind(this, id)}
        >
          <i className="fa fa-trash-o fa-lg text-danger"></i>
        </a>
      </td>
    </tr>
  );
};

export default TodoItem;
