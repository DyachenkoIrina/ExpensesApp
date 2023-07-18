const inputNode = document.querySelector(".js-input");
const addButtonNode = document.querySelector(".js-addBtn");
const historyNode = document.querySelector(".js-history");
const sumNode = document.querySelector(".js-total");
const limitNode = document.querySelector(".js-limit");
const statusNode = document.querySelector(".js-status");
const categoryNode = document.querySelector(".js-categorySelect");
const changeLimitBtn = document.querySelector(".js-limit-btn");
const clearButtonNode = document.querySelector(".js-clear_btn");
let expenses = [];
let limit = parseInt(limitNode.innerText);
limitNode.innerText = limit;

changeLimitBtn.addEventListener("click", function () {
  const newLimit = prompt("Новый лимит");
  const newLimitValue = parseInt(newLimit);

  if (!newLimitValue) {
    return;
  }

  limitNode.innerText = newLimitValue;
  limit = newLimitValue;
});

function getTotal() {
  let sum = 0;

  expenses.forEach((expense) => {
    sum = sum + expense.amount;
  });

  return sum;
}

function renderStatus() {
  const total = getTotal(expenses);

  sumNode.innerText = total;

  if (total > limit) {
    alert("Превышение лимита!");
  }
}

function renderHistory() {
  historyNode.innerHTML = "";

  expenses.forEach((expense) => {
    const historyItem = document.createElement("li");
    historyItem.className = "rub";
    historyItem.innerText = `${expense.category} - ${expense.amount} руб.`;
    historyNode.appendChild(historyItem);
  });
}

function render() {
  renderHistory();
}

function getExpenseFromUser() {
  return parseInt(inputNode.value);
}

function getSelectedCategory() {
  return categoryNode.value;
}

const clearInput = (input) => {
  input.value = "";
};

function addButtonHandler() {
  const currentAmount = getExpenseFromUser();

  if (!currentAmount) {
    return;
  }

  const currentCategory = getSelectedCategory();

  if (currentCategory === "Категория") {
    return;
  }

  const newExpense = {
    amount: currentAmount,
    category: currentCategory,
  };

  expenses.push(newExpense);

  render();

  clearInput(inputNode);
}

function clearButtonHandler() {
  expenses = [];
  render();
}

addButtonNode.addEventListener("click", addButtonHandler);
clearButtonNode.addEventListener("click", clearButtonHandler);
