
const year = new Date().getFullYear();
document.getElementById('year').innerHTML =`&copy; ${year}`;
document.getElementById('lastModified').innerHTML=`Last Modification: ${document.lastModified}`;


function toggle(){
   let menu = document.getElementById('menu');

   if (menu.style.display === "block"){
      menu.style.display= "none";
   }
        else{
            menu.style.display = "block"
   }
}

/*menu button js */

const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () =>{
   menuBtn.classList.toggle("active");
});


/*menu active*/
const menu = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
   menuBtn.classList.toggle("active");
   menu.classList.toggle("active");
});

