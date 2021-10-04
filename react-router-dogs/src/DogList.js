import React from "react";
import { Link } from "react-router-dom";

function DogList({dogs}) {
    return (
        <div>
            <div className="contianer">
                <div className="row mt-4">
                    <div className="col">
                    <h1 className="text-center"><strong>Dog House</strong></h1>
                    </div>
                </div>
                <div className="row">
                    {dogs.map(d => (
                    <div className="col-3 text-center" key={d.name}>
                        <img src={d.src} style={{width: '50vh', height: '50vh'}} alt={d.name} />
                        <h3 className="mt-3">
                        <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
                        </h3>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DogList