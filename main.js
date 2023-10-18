"use-strict";

const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

function addTask() {
  console.log(" Its working");

  if (inputBox.value === "") {
    alert("YYou need to write something");
  } else {
    let li = document.createElement("li");
    li.innerText = inputBox.value;
    listContainer.appendChild(li);

    // Adding the cancel icon from here below
    let span = document.createElement("span");
    span.innerHTML = "x";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

//Adding todo using Click
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

//Adding todo using keypress
inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// storing the task in our brower;

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Displaying the Data When we open our brower again

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
