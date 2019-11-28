import React from "react";
import ReactDOM from "react-dom";
import SlotMachine from "./SlotMachine";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Slot Machines!</h1>
        <SlotMachine s1="🍊" s2="🍉" s3="🍒" />
        <SlotMachine s1="🍉" s2="🍉" s3="🍉" />
        <SlotMachine s1="🍒" s2="🍉" s3="🍒" />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
