import "./styles.css";
import { addTask, checked, load } from "./functions"
import { button, list } from "./const";

button.addEventListener("click", addTask);
list.addEventListener("click", checked);
load();