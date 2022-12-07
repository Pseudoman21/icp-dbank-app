import React from "react";
import { createRoot } from "react-dom/client";
import Greeting from "./Greeting";

const App = () => {
 return (
  <Greeting />
 )
};

const container = document.getElementById('app')
const root = createRoot(container)

root.render(<App />)
