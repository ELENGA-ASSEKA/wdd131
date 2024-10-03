/*let x = 10;
x -= 5;

document.getElementById('demo1').innerHTML = 'The value of x is:' + x;*/

//The *= oprerator

let x = 10;
x *= 5;
 document.getElementById('demo2').innerHTML = 'The value of x is:' + x; 

 let text = 'Hi';
text += 'World';

document.getElementById('txt').innerHTML = 'The text is:' + text;

for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log("Walking east one step");
  }

//THE STATEMENT FOR LOOPS PROVIDED IN JavaScript

function countSelected(selectObject){
    let numberSelected = 0;
    for (let i = 0; i< selectObject.options.length; i++) {
        if (selectObject.options[i].selected) {numberSelected++;

        }
    }
    return numberSelected;
}

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const musicTypes = document.selectedForm.musicTypes;
    console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
});
  

