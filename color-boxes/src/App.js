import React, { Component } from "react";
import ColorBoxes from "./ColorBoxes";

class App extends Component {
   render() {
      return (
         <div className="bg-gray-300 h-screen pt-20">
            <h1 className="text-center text-3xl">Random Color Generator</h1>
            <ColorBoxes numOfBoxes={18} />
         </div>
      );
   }
}

export default App;
