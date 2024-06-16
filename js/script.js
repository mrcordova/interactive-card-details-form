const cleaveZen = window.cleaveZen;
const {
  formatCreditCard,
  getCreditCardType,
  registerCursorTracker,
  DefaultCreditCardDelimiter,
  unformatCreditCard,
} = cleaveZen;

const input = document.getElementById("card-num");
const nameInput = document.getElementById("card-name");
const cvcInput = document.getElementById("cvc");
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

nameInput.addEventListener("input", (e) => {
  const displayName = document.getElementById("front-card-name");
  displayName.textContent = nameInput.value.toUpperCase() || "JANE APPLESEED";
});

cvcInput.addEventListener("input", (e) => {
  const displayCvc = document.getElementById("back-card-cvc");
  displayCvc.textContent = cvcInput.value || "000";
});

expMInput.addEventListener("input", (e) => {
  const displayDate = document.getElementById("front-card-date");

  displayDate.textContent = displayDate.textContent.replace(
    displayDate.textContent.slice(0, displayDate.textContent.indexOf("/")),
    expMInput.value || "00"
  );
});

expYInput.addEventListener("input", (e) => {
  const displayDate = document.getElementById("front-card-date");

  displayDate.textContent =
    displayDate.textContent.substring(0, displayDate.textContent.indexOf("/")) +
    "/" +
    (expYInput.value || "00");
});
