import React from "react";
import "./App.css";
import { Transition } from "./Components/Transition";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Transition from="left">
          <h1>자기 소개</h1>
        </Transition>
        <Transition from="right">
          <h1>시작 합니다.</h1>
        </Transition>
      </header>
    </div>
  );
}

export default App;
