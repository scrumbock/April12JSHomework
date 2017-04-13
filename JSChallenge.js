// //  1.) Create a script with two variables, each assigned to a number. Add them together and output the result to the console. 


var blue = 2
var red = 6

console.log(blue + red) 

// // 1 part 2 ) Now do the same with two strings.

var blue = ("I am a hard worker,")
var red = (" but a slow learner...")

console.log(blue + red)

// // 2.) Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.

var bandGenres = ["Garage", "Post-Punk", "Psychedelic", "Industrial"];
var bandNames = ["Kinks", "Joy Division", "King Gizzard and the Lizard Wizard", "Ministry"];
var bandsAreCool = [bandGenres, bandNames];

console.log(bandsAreCool[0][2])
console.log(bandsAreCool[1][2])

// // 3.) Write a script that checks if a variable captured from a prompt is less than 100. If it is, alert the user that their variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100.


function getNumber() {

var num = document.getElementById("number").value;
var button = document.getElementById("numButton");

	if (num < 100) {
	alert("Your number is less than 100!")
	} 
	else if (num > 100) {
	alert("Your number was" + " " + num + " " + "and that is more than 100!")
	}
}
	document.getElementById("numButton").addEventListener("click", getNumber);


// 4.) Try running the script and then changing the variable's value to see how this affects the program's output.

// ANSWER: I don't know how to demonstrate this in the file other than inserting different variables in the form on the browser page?


// 5.) Write a similar script to check if a string stored in a variable is the same as another string.

// function getInfo() {
// 	var 
// }


// 6.) Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.


function alertName(somebodysName){
	return alert("You have entered " + somebodysName)
}

alertName("George")

// // 7.) Declare a function that takes no arguments but prints something to the console. Try running it after it has been declared.

function printConsole() {
	console.log("Hey! How's it going?");
}

printConsole()

