import { dbank_backend } from "../../declarations/dbank_backend";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const name = document.getElementById("name").value.toString();

  button.setAttribute("disabled", true);

  // Interact with foo actor, calling the greet method
  const greeting = await dbank_backend.greet(name);
  const testLog = await dbank_backend.topUp(20);

  console.log(testLog);
  // const test = await dbank_backend.topUp()

  button.removeAttribute("disabled");

  document.getElementById("greeting").innerText = testLog;
  console.log(testLog)

  console.log(await dbank_backend.checkBalance())
  return false;
});
