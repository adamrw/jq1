// var liItems = $('li')
// 	.css("color", "red")
// 	.text("Changed from jQuery")
// 	.width(50);

// var newElement = $("<li>From jQuery</li>");

// newElement.css("color", "red");

// $("#my-list").append(newElement);
$(document).on('ready', function() {
  


$("#first-button").click(function() {
	var newP1=$("<p>Here's some additional text for ya, asshole!</p>");
		newP1.css("color", "#cb04d6");
	$("#first-button").append(newP1);
$(".main-container").hide(10000);
$(".main-container").show(5000);
console.log("Don't touch my fucking button!");
alert("Now watch what happens... you'll know why I'm fucking angry at my buttons!" + " **I kid, what happens next is on purpose.**");
});
$("#second-button").click(function() {
	var newH1 = $("<h1>Dick! You Added A Header In This Button!</h1>");
	newH1.css("color", "#31708F");
	$("#second-button").append(newH1);
});

$("#third-button").click(function() {
	var newElement=$("<li>Holy Shit!</li><li>Holy Shit!</li><li>Holy Shit!</li><li>Holy Shit!</li><li>Holy Shit!</li><li>Holy Shit!</li><li>Holy Shit!</li><li>Holy Shit!</li><li>Holy Shit!</li><li>Holy Shit!</li><li>Holy Shit!</li><li>Holy Shit!</li><li>Holy Shit!</li><li>Holy Shit!</li><li>Holy Shit!</li>");
	   
		newElement.css("color", "#cb04d6"); 
		// newElement.css("text-align", "center");
	$("#third-button").append(newElement);
});





});