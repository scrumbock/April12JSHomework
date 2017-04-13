// //  1.) Create a script with two variables, each assigned to a number. Add them together and output the result to the console. 


var blue = 2
var red = 6

console.log(blue + red) 

// 1 part 2 ) Now do the same with two strings.

var blue = ("I am a hard worker,")
var red = (" but a slow learner...")

console.log(blue + red)

// // 2.) Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.

var bandGenres = ["Punk", "Post-Punk", "Psychedelic", "Industrial"];
var bandNames = ["Buzzcocks", "Joy Division", "King Gizzard", "Ministry"];
var bandsAreCool = [bandGenres, bandNames];

console.log(bandsAreCool[0][2])
console.log(bandsAreCool[1][2])

// 3.) Write a script that checks if a variable captured from a prompt is less than 100. If it is, alert the user that their variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100.


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



