import { input, list } from "./const";

function addTask() {
  if (input.value === "") {
    alert("Write something");
  } else {
    const li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
    const span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  save();
}

function checked(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    save();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    save();
  }
}

function save() {
  localStorage.setItem("data", list.innerHTML);
}

function load() {
  list.innerHTML = localStorage.getItem("data");
}

export { addTask, checked, load };
