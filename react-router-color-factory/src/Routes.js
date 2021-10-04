import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ColorList from './ColorList'
import ColorDetails from './ColorDetails'
import ColorForm from './ColorForm'

function Routes() {

  const initialColors = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
  };

  const [colors, updateColors] = useState(initialColors);

  function renderCurrentColor(props) {
    const { color } = props.match.params;
    const hex = colors[color];
    return <ColorDetails hex={hex} colors={color} />;
  };

  function handleAdd(newColorObj) {
    updateColors(prevColors => ({ ...prevColors, ...newColorObj }));
  }

  return (
    <Switch>
      <Route exact path="/colors">
        <ColorList colors={colors} />
      </Route>
      <Route path="/colors/:color" render={renderCurrentColor} />
      <Route path="/color/new">
        <ColorForm newColor={handleAdd}/>
      </Route>
      <Redirect to="/colors" />
    </Switch>
  );
}

export default Routes;