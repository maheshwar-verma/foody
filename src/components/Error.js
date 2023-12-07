import { useRouteError } from "react-router-dom";

const Error=()=>{
const err=useRouteError();
 console.log(err);

    return <div style={{  position: "absolute",
    left: "50%",
    top: "50%",
    WebkitTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)"}}>
        <h1>Oops Something went wrong!!!!!!</h1>
        <h2>{err?.error?.message}</h2>
        <h3>{err.status+":"+err.statusText}</h3>
    </div>
}
export default Error;