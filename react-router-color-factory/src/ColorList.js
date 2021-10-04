import React from "react";
import { Link } from "react-router-dom";

function ColorList({colors}) {

    const colorLinks = Object.keys(colors).map(color => (
        <li key={color}>
            <Link to={`/colors/${color}`}>{color}</Link>
        </li>
    ))

    return (
        <div className="pt-5">
            <div>
                <h1>Color factory</h1>
                <h1><Link to="/color/new">New Color</Link></h1>
            </div>
            <div>
                Choose a Color
                <div>{colorLinks}</div>
            </div>
        </div>
    )
}

export default ColorList