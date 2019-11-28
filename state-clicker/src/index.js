import React, { Component } from "react";
import ReactDOM from "react-dom";

class LuckySeven extends Component {
   constructor(props) {
      super(props);
      this.state = { num: 1 };
      this.handleClick = this.handleClick.bind(this);
   }

   handleClick() {
      const randomNum = Math.floor(Math.random() * 10);
      this.setState({ num: randomNum });
   }

   render() {
      return (
         <div style={{ width: "1200px", margin: "0 auto" }}>
            <h1>Number is {this.state.num}</h1>
            {this.state.num === 7 ? (
               <h1>YOU WIN!</h1>
            ) : (
               <button onClick={this.handleClick}>Random Number</button>
            )}
         </div>
      );
   }
}

ReactDOM.render(<LuckySeven />, document.getElementById("root"));
