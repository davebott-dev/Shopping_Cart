import {useRouteError} from "react-router-dom"

function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>Oops. Theres an error</h1>
            <p>sorry an unexpected error has occured</p>
        </div>
    )
}

export default ErrorPage;