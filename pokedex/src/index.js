import React, { Component } from "react";
import ReactDOM from "react-dom";
import PokeGame from "./PokeGame";

class App extends Component {
   render() {
      return <PokeGame />;
   }
}

ReactDOM.render(<App />, document.getElementById("root"));
