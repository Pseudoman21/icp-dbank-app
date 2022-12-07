import React from "react";
import { createRoot } from "react-dom/client";
import DBankForm from "./Components/DBankForm";
import '../assets/main.css'

const App = () => {
 return (
  <DBankForm />
 )
};

const container = document.getElementById('app')
const root = createRoot(container)

root.render(<App />)
