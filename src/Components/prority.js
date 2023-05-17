const Priority = ({ p }) => {
  if (p === 1) {
    return (
      <h6 className="mb-0">
        <span className="badge bg-danger">High priority</span>
      </h6>
    );
  } else if (p === 2) {
    return (
      <h6 className="mb-0">
        <span className="badge bg-success">Middle priority</span>
      </h6>
    );
  } else {
    return (
      <h6 className="mb-0">
        <span className="badge bg-warning">Low priority</span>
      </h6>
    );
  }
};

export default Priority;
