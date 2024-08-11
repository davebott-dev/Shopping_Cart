import {useRouteError} from "react-router-dom"
import {CircleX} from 'lucide-react'

function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="error">
            <h1>Oops. There&apos;s an error...</h1>
            <CircleX className="errorLogo"/>
            <p>Sorry, an unexpected error has occured...</p>
        </div>
    )
}

export default ErrorPage;