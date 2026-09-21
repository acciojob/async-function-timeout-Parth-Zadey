const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

btn.addEventListener("click", async () => {
  const message = textInput.value;
  const time = Number(delayInput.value);

  await delay(time);

  output.innerText = message;
});