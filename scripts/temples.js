
const year = new Date().getFullYear();
document.getElementById('year').innerHTML =`&copy; ${year}`;
document.getElementById('lastModified').innerHTML=`Last Modification: ${document.lastModified}`;


/*function myMenuFunction(){
   var span = document.getElementById('link');

   if (span.className === "home-pge") {
    span.className += "responsive";
   }
        else{
            span.className = "home-page"
   }
*/
/*menu button js */
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () =>{
   menuBtn.classList.toggle("active");
})

const menu = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
   menuBtn.classList.toggle("active");
   menu.classList.toggle("active");
})
