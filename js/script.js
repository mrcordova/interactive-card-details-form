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
const submitBtn = document.getElementById("submit-btn");
const errorObj = {
  valueMissing: "Can't be blank",
  patternMismatch: "Wrong format, numbers only",
  tooLong: "exceeds the allowed amount of charactors",
  tooShort: "input too short",
};
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

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const labs = document.querySelectorAll("label");
  const form = document.getElementById("card-form");
  const completeDiv = document.getElementById("complete-div");
  const formDiv = document.getElementById("form-con");

  for (const lab of labs) {
    const inputs = lab.querySelectorAll("input");
    const span = lab.querySelector("span");

    for (const input of inputs) {
      input.classList.toggle("input-error-border", !input.checkValidity());
      span.classList.toggle("input-error-hide", input.checkValidity());
      for (const key in errorObj) {
        if (input.validity[key]) {
          span.textContent = errorObj[key];
        }
      }
    }
  }

  completeDiv.classList.toggle("hide", !form.checkValidity());
  if (form.checkValidity()) {
    form.style.display = "none";
  }
});
