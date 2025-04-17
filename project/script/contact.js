const year = new Date().getFullYear();

document.getElementById("year").innerHTML = `&copy; ${year}`;

document.getElementById("lastModified").textContent= `lastModification: ${document.lastModified}`;
