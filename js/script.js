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

const formatNumber = (number) =>
  number.split("").reduce((seed, next, index) => {
    if (index !== 0 && !(index % 4)) seed += " ";
    return seed + next;
  }, "");
