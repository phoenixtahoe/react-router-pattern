import React from "react";
import { Link, Redirect} from "react-router-dom";
import { useParams } from "react-router-dom";


function DogDetails({dogs}) {

    const {name} = useParams()

    const dog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());

    if (!dog) return <Redirect to="/dogs"/>

    return (
        <div className="container text-center">
            <div className="m-4">
                <img src={dog.src} alt={dog.name}/>
                <h1>{dog.name}</h1>
                <h2>{dog.age} is this year old</h2>
                <div>
                    <ul>
                        {dog.facts.map((fact, i) => (
                            <li key={i}>{fact}</li>
                        ))}
                    </ul>
                </div>
                <Link to="/dogs">Go Back</Link>
            </div>
        </div>
    )
}

export default DogDetails

