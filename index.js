const inputNode = document.querySelector(".js-input");
const buttonNode = document.querySelector(".js-addBtn");
const historyNode = document.querySelector(".js-history");
const sumNode = document.querySelector(".js-total");
const limitNode = document.querySelector(".js-limit");
const statusNode = document.querySelector(".js-status");
const categoryNode = document.querySelector(".js-categorySelect");
const changeLimitBtn = document.querySelector(".js-limit-btn");
const clearButtonNode = document.querySelector(".js-clear_btn");

let limit = parseInt(limitNode.innerText);

const expenses = [];

limitNode.innerText = limit;

buttonNode.addEventListener("click", function () {
  if (inputNode.value === " ") {
    return;
  }

  if (categoryNode.value === "Категория") {
    return;
  }

  const expense = parseInt(inputNode.value);
  const category = (inputNode.value = "");
  categoryNode.value = "";

  expenses.push();

  let expensesListHTML = "";

  expenses.forEach((element) => {
    expensesListHTML = expensesListHTML + `<li>${element} </li>`;
  });

  constHTML = `<ol><li>${expense}</li></ol>`;

  historyNode.innerHTML = `<ol>${expensesListHTML} </ol>`;

  let sum = 0;

  expenses.forEach((element) => {
    sum = sum + element;
  });

  sumNode.innerText = sum;

  if (sum > limit) {
    alert("Превышение лимита!");
  }
});

limitNode.addEventListener("click", function () {
  const newLimit = prompt("Новый лимит");
  const newLimitValue = parseInt(newLimit);

  if (!newLimitValue) {
    return;
  }

  limitNode.innerText = newLimitValue;
  limit = newLimitValue;
});
