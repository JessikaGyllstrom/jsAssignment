const form  = document.getElementById('signup');
const element = document.getElementById("generate");
const checkbox = document.getElementById("terms");

// function so validate inputfields before user can be registered
function validate() {
form.addEventListener('submit', (event) => {
    //set boolean 
    let valid = new Boolean(false);
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
        //if passwords doesnt match
        if(passwordFirst!=passwordSecond) {
            alert("Not matching passwords!");
            break;            
        }
        //if no value in checkbox
        if (!check()) {
            alert("Please agree to terms and conditions to register");
            break;  
        } 
        //if matching passwords
        if(passwordFirst==passwordSecond) {
            //store the length of the email
            let length = email.length;
            //get index of @
            const indexOf = email.indexOf("@") + 1;
            //if @ doesnt occure att index 1 or last index of email
            if(indexOf != 1 && indexOf != length) {
                valid = true;
                //redirect to welcome page
                window.location.href = "welcome.html";
                break;
            }
        }
    }
}});
};
// add evenlistener to button 
element.addEventListener("click", function() {
    document.getElementById("randomArray").innerHTML = "Random array: ";        
    document.getElementById("sortedArray").innerHTML = "Sorted array: ";        
    // randomize an array with 10 unique numbers between 1-100
    let numbers = new Array(10);
    //iterate through array
    for (let i = 0; i < numbers.length; i++) {
    //randomize a number between 0-100
    let nr = Math.floor(Math.random() * 101);
    const found = numbers.includes(nr);
    // number isnt already in array
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
})
//function to keep track if terms checkbox is checked or not
function check() {
    if (document.getElementById("terms").checked)
    {
        console.log("checked");
        return true;
    }
    else {
        console.log("checked out");
        return false;
    }
}