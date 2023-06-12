import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import Provider from "./store";
const root = document.getElementById("root");

ReactDOM.render(
  <section>
      <Provider>
          <App />
      </Provider>
  </section>,
  root
);
