//feature 1
import React from "react";
import "./App.css";
import Products from "./components/Products";
import data from "./data.json";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shoping Cart</a>
        </header>
        <main className="content">
          <div className="main">
            <Products products={this.state.products}></Products>
          </div>
          <div className="sidebar">cart items </div>
        </main>
        <footer>All rights are reserved.</footer>
      </div>
    );
  }
}

export default App;
