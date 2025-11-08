import React, {useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    // Changed redirect timeout to 3 seconds

    useEffect(() => {
        const id = setTimeout(() => navigate("/"), 3000);
        return () => clearTimeout(id);
    }, [navigate]);

    return (
        <div style={{
            minHeight: "70vh",
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            padding: "1.5rem"
        }}>
            <div>
                <div style={{fontSize: "5rem", fontWeight: 800, lineHeight: 1}}>404</div>
                <h1 style={{margin: "0.5rem 0 0.25rem 0"}}>Page Not Found</h1>
                <p style={{opacity: 0.8}}>Redirecting you to the home page...</p>
                <p style={{marginTop: "0.75rem"}}>
                    Or go now: <Link to="/" style={{textDecoration: "underline"}}>Home</Link>
                </p>
            </div>
        </div>
    );
};

export default NotFound;


