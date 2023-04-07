import React from "react";
import ReactDOM from "react-dom/client";
import UsingClass from "./PaymentClass";
import UsingFunction from "./PaymentFunction";
import "./payment.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <UsingClass />
    <UsingFunction />
  </>
);
