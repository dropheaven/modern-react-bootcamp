import React, { Component } from "react";
import ReactDOM from "react-dom";
import Lotto from "./Lotto";

class App extends Component {
   render() {
      return <Lotto balls={6} maxNum={10} />;
   }
}

ReactDOM.render(<App />, document.getElementById("root"));
