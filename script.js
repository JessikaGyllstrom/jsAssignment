const myElement = document.getElementById("randomArray");

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
        numbers.join(' ');

          //copy array of numbers
        const clone = [...numbers];


        clone.sort(function(a, b){return a - b});
        document.getElementById("sortedArray").innerHTML += clone.join(' ');        

        
    }
}