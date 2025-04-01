import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div>
           
            <h1>404 Page Not Found</h1>
            <h3>{err.status} : {err.statusText}</h3>
            </div>
    )

};

export default Error;