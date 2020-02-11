import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
// import Map from "./components/Map";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        {/* <Map /> */}
        {/* <h1>Coffee Anyone?</h1>; */}
      </div>
    );
  }
}
export default App;
