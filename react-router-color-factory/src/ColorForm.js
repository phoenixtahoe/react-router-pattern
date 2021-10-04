import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

function NewColorForm({newColor}) {

  const [form, updateForm] = useState({name: "", hex:"#ffffff"});

  const history = useHistory();


  function handleChange(e) {
    e.persist();
    updateForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    newColor({ [form.name]: form.hex });
    history.push("/colors");
  }

  const {hex, name} = form;

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mt-5">
          <label htmlFor="name">Color name</label>
          <input
            className="form-control"
            name="name"
            id="name"
            placeholder="Enter color name"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div className="m-5">
          <label htmlFor="hex">Hex value</label>
          <div>
            <input
                type="color"
                name="hex"
                id="hex"
                onChange={handleChange}
                value={hex}
            />
          </div>
        </div>
        <input className="btn btn-primary" type="Submit" value="Add this color" readOnly />
      </form>
      <div className="mt-2"><Link to="/colors">Go Back</Link></div>
    </div>
  );
}

export default NewColorForm;
