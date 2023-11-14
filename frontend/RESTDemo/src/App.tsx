import { RequestForm } from "./components/RequestForm";
import { Header } from "./components/Header";
import { DisplayRequest } from "./components/DisplayRequest";
import { useState } from "react";
import { DisplayResponse } from "./components/DisplayResponse";


function App() {
  document.body.classList.add("bg-dark")
  document.title = "REST Demo"

  let [displayContent, setDisplayContent] = useState("{}")


  return (
    <>
    <Header />
    <div>
      <RequestForm setDisplayContent={setDisplayContent} />
      <DisplayRequest displayContent={displayContent} />
      <DisplayResponse />
    </div>
    </>
  );
}

export default App;
