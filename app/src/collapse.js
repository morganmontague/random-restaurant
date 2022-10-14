import App from "./App"
import List from "./List"

function Collapse (props) {
    
    return (
        <>
    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={"#mealInfo"+ props.index} aria-expanded="false" aria-controls={"#mealInfo"+ props.index}>
    Food Description
  </button>

<div className="collapse" id={"mealInfo"+ props.index}>
  <div className="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>
</>
    )
}

export default Collapse