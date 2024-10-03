const input = document.querySelector("favchap");
const button = document.querySelector("button");
const list = document.querySelector("list");

const li = document.createElement("li"); 
const delecteButton = document.crearteElement("button");

li.textContent = input.value;
delecteButton.textContent = "❌";

li.append(delecteButton);
list.append(li)