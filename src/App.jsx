import { useState } from "react";
import "./index.css";
import Footer from "./components/Footer";
import List from "./components/List";
import Item from "./components/Item";
import Logo from "./components/Logo";
import Form from "./components/Form";
function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <List />
      {/* <Item /> */}
      <Footer />
    </div>
  );
}

export default App;
