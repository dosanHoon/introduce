import React from "react";
import "./App.css";
import { Transition } from "./Components/Transition";
import { Pages, Page } from "./Components/Pages";

import styled from "styled-components";
import { Prallex } from "./Components/Prallex";

const Profile = styled.img<{ background?: string }>`
  width: 400px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pages>
          <Page fullPage>
            <Transition from="left">
              <h1>자기 소개</h1>
            </Transition>
            <Transition from="right">
              <h1>시작 합니다.</h1>
            </Transition>
          </Page>
          <Page>
            <Transition from="right">
              <Prallex>
                <Profile src="img01.png" alt="self" />

                <p>한승훈</p>
                <p>1987.11.06</p>
                <p>1987.11.06</p>
              </Prallex>
            </Transition>
          </Page>
        </Pages>
      </header>
    </div>
  );
}

export default App;
