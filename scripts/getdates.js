const year = new Date().getFullYear();

document.getElementById("currentyear").innerHTML = `&copy; ${year}`

document.getElementById("lastModified").textContent = `last Modification: ${document.lastModified}`