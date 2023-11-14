import { CodeBlock, dracula } from "react-code-blocks";

export function DisplayRequest(props:any){
    let {displayContent} = props;
    return (
        <>
        <div className="text-light mb-1"><h1>Request: </h1></div>
        <CodeBlock text={displayContent} language="json" theme={dracula} />
        </>
    )
}