const cleaveZen = window.cleaveZen;
const {
  formatCreditCard,
  getCreditCardType,
  registerCursorTracker,
  DefaultCreditCardDelimiter,
  unformatCreditCard,
} = cleaveZen;

const input = document.getElementById("card-num");
const expMInput = document.getElementById("exp-date-m");
const expYInput = document.getElementById("exp-date-y");

const formatNumber = (number) =>
  number.split("").reduce((seed, next, index) => {
    if (index !== 0 && !(index % 4)) seed += " ";
    return seed + next;
  }, "");

input.addEventListener(
  "input",
  () => (input.value = formatNumber(input.value.replaceAll(" ", "")))
);
input.addEventListener("input", (e) => {
  const displayNum = document.getElementById("front-card-num");
  //   console.log(displayNum.textContent.slice(0, input.value.length));
  displayNum.textContent = `${
    input.value + displayNum.textContent.slice(input.value.length)
  }`;
});

expMInput.addEventListener("input", (e) => {
  const displayMon = document.getElementById("front-card-date");
  console.log(expYInput.value || "00");
  displayMon.textContent = `${
    (expMInput.value || "00") +
    displayMon.textContent.slice(0, Math.min(expMInput.value.length, 2))
  }/${expYInput.value || "00"}`;
});
expYInput.addEventListener("input", (e) => {
  const displayMon = document.getElementById("front-card-date");
  displayMon.textContent = `${expMInput.value || "00"}/${
    expYInput.value + displayMon.textContent.slice(4)
  }`;
});
