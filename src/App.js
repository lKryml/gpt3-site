import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  whatGPT3,
  Header,
} from "./Containers";
import { CTA, Navbar, Brand } from "./Components";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <whatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;