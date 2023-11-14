import { useState } from "react";

function ListItem(props: any) {
  let { name, setName } = props;
  return (
    <li>
      <a
        className="dropdown-item"
        href="#"
        onClick={(event: any) => setName(event.target.textContent)}
      >
        {name}
      </a>
    </li>
  );
}

export function Selector(props:any) {
  let [method, setMethod] = useState("Method");
  let {labelClasses, selectClasses, optionClasses} = props
  return (
      <>
        <span className={labelClasses}>Select Method</span>
        <select className={selectClasses}>
          <option onClick={(event: any)=>{setMethod(event?.target.textContent)}} className={optionClasses}>GET</option>
          <option onClick={(event: any)=>{setMethod(event?.target.textContent)}} className={optionClasses}>POST</option>
          <option onClick={(event: any)=>{setMethod(event?.target.textContent)}} className={optionClasses}>PUT</option>
          <option onClick={(event: any)=>{setMethod(event?.target.textContent)}} className={optionClasses}>DELETE</option>
        </select>
      </>
  );
}
