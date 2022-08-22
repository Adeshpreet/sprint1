import React, { Component } from "react";

export default class lifecycle extends Component {
  constructor() {
    super();
    this.state = { count: 0, show: true };
  }
  componentDidMount() {
    console.log("Component Mounted");
  }
  componentDidUpdate() {
    console.log("Component Updated");
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  unmount = () => {
    this.setState({ show: false });
  };
  render() {
    let liveCount;
    if (this.state.show === true) {
      liveCount = <Child count={this.state.count}></Child>;
    }

    return (
      <div>
        {liveCount}
        <button onClick={this.increment}>Increase Count</button>
        <button onClick={this.decrement}>Decrese Count</button>
        <button onClick={this.unmount}>Unmount Component</button>
      </div>
    );
  }
}
class Child extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillUnmount() {
    console.log("Component Unmounted");
  }
  render() {
    return <h1>{this.props.count}</h1>;
  }
}

// import "./App.css";
// import { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (count === 0) {
//       console.log("Component Mounted");
//     } else {
//       console.log("Component Updated");
//     }

//     return () => {
//       console.log("Component Unmounted");
//     };
//   }, [count]);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Update component</button>
//     </div>
//   );
// }

// export default App;
