

numbers = new Array(10);

// function to randomize a number 
function randomNumer() {

    // Tar fram ett slumpvärde mellan 0-11
    var nr = Math.floor(Math.random() * 11);
    //document.writeln(nr);
    document.writeln("<br>");
    document.writeln("Uppdatera sidan för att slumpa fram ett nytt nummer!");
    numDisplay = "nr";
    document.getElementById("numDisplay").innerHTML = nr;

}
