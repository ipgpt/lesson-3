import React from "react";
import styled from "styled-components";
import sanitizeHtml from "sanitize-html";
import logo from "./logo.svg";
import "./App.scss";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid yellow;
  color: yellow;
  margin: 1em;
  padding: 0.25em 1em;
`;

function App() {
  const dirtyFooter = `
      <i>Footer</i>
      <b>React</b>
      <a href="#" target="_blank">click</a>
      <code>here</code>
  `;
  const footer = sanitizeHtml(dirtyFooter, {
    allowedTags: ["b", "i", "em", "strong", "a"],
    allowedAttributes: {
      a: ["href", "target"]
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>Button</Button>
        <div dangerouslySetInnerHTML={{ __html: footer }} />
      </header>
    </div>
  );
}

export default App;
