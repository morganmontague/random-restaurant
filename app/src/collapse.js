

function Collapse(props) {
  return (
    <>
      <button
        className="btn btn-small"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={"#mealInfo" + props.index}
        aria-expanded="false"
        aria-controls={"#mealInfo" + props.index}
      >
        Food Description
      </button>

      <div className="collapse shadow" id={"mealInfo" + props.index}>
        <div className="card card-body shadow" id="friedFood">
          {props.item}
        </div>
      </div>
    </>
  );
}

export default Collapse;
