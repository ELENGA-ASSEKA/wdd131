
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
})

/*menu active*/
const menu = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
   menuBtn.classList.toggle("active");
   menu.classList.toggle("active");
})

//temple card to display the informations about the temple
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    /*{
      templeName: "Burley Idaho",
      location: "Burley, Idaho,United States",
      dedicated: "2022, June, 4",
      area: 38600,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/burley-idaho-temple/burley-idaho-temple-57842.jpg"
    },
    
    {
      templeName: "Accra Ghana",
      location: "Accra, Ghana",
      dedicated: "2004, January, 11",
      area:17500,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-5151.jpg"
    }*/

  ];

createTempleCard(temples);


/*const nonuthaLink = document.querySelector("#nonutha");
nonuthaLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => !temple.location.includes("Utha")));
});*/

function createTempleCard(filteredTemples){
 // document.querySelector(".res-grid").innerHTML= "";
  filteredTemples.forEach( temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication =document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = ` <span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = ` <span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = ` <span class="label">Zise:</span> ${temple.erea} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".res-grid").appendChild(card);
  }

  );
}