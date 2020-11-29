import React from "react";
import "./App.css";
import { Transition } from "./Components/Transition";
import { Pages, Page } from "./Components/Pages";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pages>
          <Page>
            <Transition from="left">
              <h1>자기 소개</h1>
            </Transition>
            <Transition from="right">
              <h1>시작 합니다.</h1>
            </Transition>
          </Page>
          <Page>
            <Transition from="right">
              <img src="img01.png" alt="self" />
            </Transition>
          </Page>
        </Pages>
      </header>
    </div>
  );
}

export default App;
