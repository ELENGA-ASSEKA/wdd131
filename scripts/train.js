let prenom = "Je m'appelle Pierre";
let age = 29;
let age2 = '29';


document.getElementById('p1').innerHTML = 'Type de pronom:' + typeof prenom;
document.getElementById('p2').innerHTML = ' Type de age:' + typeof age;
document.getElementById('p3').innerHTML = 'Type de age2:' + typeof age2;
// The += operator
let x = 10;
x += 5;

document.getElementById("demo").innerHTML = "value of x is:" + x;

//The text
let text = 'Hello';
text += 'World';

document.getElementById('greeting').innerHTML = 'The text is:' + text;

//The -= operator

let scores = [100, 72, 83, 94, 88, 87];
let accumulator = 0;
let count = 0;
scores.forEach(score => {
  if (score > 87) {
    accumulator += score;
    count ++;
  }
});
if ( count > 0 ) {
  console.log(accumulator/count); 
} else {
  console.log("No scores reported.");
}