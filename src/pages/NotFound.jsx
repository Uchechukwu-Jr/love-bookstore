import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div className="container text-center ">
            <h1 className="text-red-600 text-2xl">404 not found</h1>
            <p>
                it might have been removed, use the button below to visit our
                home page
            </p>
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
