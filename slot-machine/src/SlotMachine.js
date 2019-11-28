import React from "react";

class SlotMachine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    return (
      <div>
        {s1} {s2} {s3}
        {s1 === s2 && s1 === s3 ? <p>You win!</p> : <p>You lose!</p>}
      </div>
    );
  }
}

export default SlotMachine;
