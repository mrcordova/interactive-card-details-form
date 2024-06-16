const cleaveZen = window.cleaveZen;
const {
  formatCreditCard,
  getCreditCardType,
  registerCursorTracker,
  DefaultCreditCardDelimiter,
  unformatCreditCard,
} = cleaveZen;

const input = document.getElementById("card-num");

input.addEventListener(
  "input",
  () => (input.value = formatNumber(input.value.replaceAll(" ", "")))
);
input.addEventListener("input", (e) => {
  const displayNum = document.getElementById("front-card-num");
  console.log(displayNum.textContent.slice(0, input.value.length));
  displayNum.textContent = `${
    input.value + displayNum.textContent.slice(input.value.length)
  }`;
});

const formatNumber = (number) =>
  number.split("").reduce((seed, next, index) => {
    if (index !== 0 && !(index % 4)) seed += " ";
    return seed + next;
  }, "");
