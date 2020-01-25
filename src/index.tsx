import React from "react";
import ReactDOM from "react-dom";
import Authenticate from "./Authenticate";
import { AuthProvider } from "./components/AuthProvider";

ReactDOM.render(
  <AuthProvider>
    <Authenticate />
  </AuthProvider>,
  document.getElementById("root")
);
