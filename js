var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");//grabs all boxes
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay")//grabs the span
colorDisplay.textContent = pickedColor;//changes text
var messageDisplay = document.getElementById("message");//gets message span
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
  //generate all new colors
  colors = generateRandomColors(6);
  //pick a new random color from array
  pickedColor = pickColor();
  //change ColorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for(var i = 0; squares.length; i ++){
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#232323";
});

for(var i = 0; i < squares.length; i ++){
	//add initial colours to squares
  squares[i].style.backgroundColor = colors[i];//loop through all colors in array
	
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab colour of clicked square
		var clickedColor =     this.style.backgroundColor;
		//compare color to pickedColor
    
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!"
      resetButton.textContent = "Play Again?"
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
		} else {
this.style.backgroundColor = "#232323";
messageDisplay.textContent = "Try Again"//changes text for message span
		}
	});
}

function changeColors(color){
  for(var i = 0;i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  var arr = [];
  for(var i = 0; i < num; i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " +  + g + ", " + b + ")";
}
