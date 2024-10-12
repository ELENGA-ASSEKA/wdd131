const input = document.querySelector("favchap");
const button = document.querySelector("button");
const list = document.querySelector("list");

const li = document.createElement("li"); 
const delecteButton = document.crearteElement("button");

li.textContent = input.value;
delecteButton.textContent = "❌";

li.append(delecteButton);
list.append(li)




const handleTabletChange = (e) => {    if (e.matches) {        navLinks.classList.remove('active');        hamburger.style.display = 'block';    } else {        navLinks.classList.add('active');        hamburger.style.display = 'none';    }};


