const year = new Date().getFullYear();
document.getElementById("year").innerHTML = `&copy; ${year} `;

document.getElementById("lastModified").innerHTML = `LastModification: ${document.lastModified}`

/* weather manupilation js */
let temperature = 22;
let windSpeed = 16;
let condition = "Sunny";

// function to convert celsius to Fahrenheit
function celsiusToFahrenheit (celsius) {
    return (celsius * 9/5) + 32;
}

//function to convert km/h to pmh
function kmtToMph(kmh) {
    return kmh * 0.621371;
}

//function to calculat windChill
function calculateWindChill ( tempCelsius, windSpeedkmh) {
    let tempF = celsiusToFahrenheit (tempCelsius);
    let windMph = kmtToMph(windSpeedkmh);


    if (tempF <= 50 && windMph >3) {
        let windChill = 35.74 + (0.621371 * tempF) - (35.75 * Math.pow(windMph, 0.16)) + (0.4275 * tempF * Math.pow(windMph, 0.16));
        return windChill.toFixed(2) + "°F";

    } else{
        return " N/A ( wind chill only applies to temps  ≤ 50°F and wind > 3 mph )";
    }
}

//Update HTML Element
console.log("Weather Condition:", condition);
console.log("Temperature:", temperature + "°C");
console.log("Wind Speed:", windSpeed + "km/h");
console.log("Wind Chill:", calculateWindChill(temperature, windSpeed));
