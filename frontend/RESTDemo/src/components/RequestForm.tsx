import { InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Selector } from "./RequestSelector";
import "../css/RequestSelector.css";

function updateDisplay(displayRequestSetter: any){
    let requestBodyElement: string = document.getElementById("requestBodyInput")?.value;
    // try{
        requestBodyElement = JSON.stringify(JSON.parse(requestBodyElement),  undefined, 2)
        displayRequestSetter(requestBodyElement)
        console.log(requestBodyElement)
    // }catch{
    //     displayRequestSetter(requestBodyElement)

    // }
}

export function RequestForm(contentSetter: any) {
let {setDisplayContent} = contentSetter;
  return (
    <>
    <span className="card d-flex justify-content-center">

      <div className="input-group mb-3">
        <Selector labelClasses="input-group-text" selectClasses="form-select" />
        <button className="btn btn-primary" onClick={()=>updateDisplay(setDisplayContent)}>Submit</button>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">Request Body</span>
        <textarea className="form-control" id="requestBodyInput"></textarea>
      </div>
    </span>
    </>
  );
}
