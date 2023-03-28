const myElement = document.getElementById("randomArray");

function validate() {
const form  = document.getElementById('signup');

form.addEventListener('submit', (event) => {
    //set boolean 
    let valid = false;
    //stop form submission
    event.preventDefault();
    console.log("submitted");
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let passwordFirst = document.getElementById('passwordFirst').value;
    let passwordSecond = document.getElementById('passwordSecond').value;

    //check if inputfields has values & password is longer than 5
    if(username!="" && passwordFirst != "" && passwordSecond != "" && passwordFirst.length > 5 && passwordSecond.length > 5 && email.includes("@")) {
       while(!valid) { 
        if(passwordFirst!=passwordSecond) {
           
            console.log("not a match");
            break;
        }
        //if matching passwords
        if(passwordFirst==passwordSecond) {
            let length = email.length;

            const indexOf = email.indexOf("@") + 1;

            if(indexOf != 1 && indexOf != length) {
                console.log(indexOf);
                console.log(length);

                console.log("success!");
                break;
    

            }
            
   
            }

       
  
    }
}});
};
randomArray();
// function to randomize an array with 10 unique numbers between 1-100
function randomArray() {
    let numbers = new Array(10);

    //iterate through array
    for (let i = 0; i < numbers.length; i++) {
    //randomize a number between 0-100
    let nr = Math.floor(Math.random() * 101);

    const found = numbers.includes(nr);

    if (!found) {
        numbers[i] = nr;
        document.getElementById("randomArray").innerHTML += nr + " ";        
    }
   


    }
    sortArray(numbers);
  
    //sort array of numbers in descending order 
    function sortArray(numbers) {
        //copy array of numbers
        const clone = [...numbers];
        clone.sort(function(a, b){return a - b});
        document.getElementById("sortedArray").innerHTML += clone.join(' ');        

    }
}