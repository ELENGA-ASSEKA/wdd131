/*To display the current year*/
const year = new Date().getFullYear();
document.getElementById('currentyear').innerHTML = `&copy; ${year}`;

/*To display the modification year*/
document.getElementById('lastModified').textContent = `last Modification: ${document.lastModified}`;

/*display the html elements*/


const navLinks = document.getElementById('nav-links');
const hamburger = document.getElementById('hamburger');

/*Add Event listner */

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    console.log("Hamburger button clicked");
    hamburger.textContent = navLinks.classList.contains('active') ? '✖' : '☰';

});

/*masque the mobile view */
const mediaQuery = window.matchMedia('(max-width: 610px)');
/*if (mediaQuery.matches) {
    navLinks.style.display = 'none';
    hamburger.style.display = 'block';
}
else {
    navLinks.style.display = 'flex';
    hamburger.style.display = 'none';
};*/
const handleTabletChange = (e) => {
    if (e.matches) {
        navLinks.classList.remove('active');
        // Hide menu by default on mobile        
        hamburger.style.display = 'block';
    }
    else {
        navLinks.classList.add('active');
        // Show menu by default on larger screens 
        hamburger.style.display = 'none';
    }
};

mediaQuery.addListener((e) => {
    if (e.matches) {
        navLinks.style.display = 'none';
        hamburger.style.display = 'block';
    }

    else {
        navLinks.style.display = 'flex';
        hamburger.style.display = 'none';
    }
});
