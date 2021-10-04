import React from "react";
import { Link } from "react-router-dom";

function ColorDetails({hex, colors}) {
    return (
        <div style={{  height: '100vh', width: '100%', backgroundColor: hex }}>
            <h1 className="pt-5" style={{color: 'white'}}>{colors}!</h1>
            <Link to="/">Go back</Link>
        </div>
    )
}

export default ColorDetails