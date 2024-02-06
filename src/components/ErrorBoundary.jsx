import { useNavigate, useRouteError } from "react-router-dom";

export function ErrorBoundary() {
    let error = useRouteError();
    const navigate = useNavigate();
    console.error(error);
    // Uncaught ReferenceError: path is not defined
    return (
        <div className="container text-center text-red-600 text-2xl">
            Dang! Something went wrong.
            <div className="d-grid gap-2 my-5">
                <button
                    onClick={() => navigate("/")}
                    className="btn btn-primary"
                >
                    Go Home
                </button>
            </div>
        </div>
    );
}
