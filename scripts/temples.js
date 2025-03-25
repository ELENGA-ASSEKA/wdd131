
const year = new Date().getFullYear();
document.getElementById('year').innerHTML =`&copy; ${year}`;
document.getElementById('lastModified').innerHTML=`Last Modification: ${document.lastModified}`;


function toggle(){
   let menu = document.getElementById('menu');

   if (menu.style.display === "block") {
      menu.style.display= "none";
   }
        else{
            menu.style.display = "block"
   }
}

document.addEventListener("click", function(event) {
   let menu = document.getElementById("menu");
   let button = document.querySelector("menu-button");

   if (!menu.contains(event.target) && !button.contains(event.target)){
      menu.style.display = "none";
   }
})
/*menu button js 
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () =>{
   menuBtn.classList.toggle("active");
})

const menu = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
   menuBtn.classList.toggle("active");
   menu.classList.toggle("active");&
})*/

