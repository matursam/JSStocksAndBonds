
const bearMarket = [
	[12, 14, 13, 10, 10, 20, 21, 25, 8],
	[7, -6, 10, -10, 30, 6, -19, 22, -2],
	[9, 10, 7, -5, -20, 12, 21, 18, 7],
	[7, 8, 5, -6, -40, 3, 16, -14, 4],
	[8, 6, 4, -4, 40, 8, 4, -12, 3],
	[6, 4, 3, 3, -15, 5, 8, -8, 5],
	[5, 7, -1, -3, 45, 6, -10, 10, 4],
	[-2, 6, -3, -8, -20, 7, 10, 14, 6],
	[11, 11, -5, -7, 30, 10, -11, -18, -4],
	[-5, 13, -8, 6, 25, 4, 18, -22, -4],
	[-8, -10, -10, -15, -20, -20, -23, -25, -7]
]

const bullMarket = [
	[-2, -10, -7, -9, -2, -9, -7, -16, -4],
	[26, 16, 25, 8, -14, 21, 14, -4, 17],
	[18, 23, 11, 12, 46, 18, -5, 34, 15],
	[23, 28, -2, 11, 56, 19, 30, 29, 14],
	[20, 15, 15, 7, -20, 15, 13, -10, 12],
	[17, 21, 13, -2, 37, 23, 23, 19, 14],
	[19, 24, 17, 9, -5, 26, 13, -7, 15],
	[11, 18, 14, 11, 67, 15, 22, 18, 13],
	[13, 31, 1, 14, -11, 18, 18, -14, 10],
	[14, -8, 19, -1, -9, 25, -10, 13, 19],
	[24, 24, 23, 20, 51, 27, 38, 33, 18],
]

var stockValues = new Array(10)

//Define constants
const NUM_TURNS = 10
const STARTING_STOCK_PRICE = 100;
//Define global variables
var turnNumber = 0;
var currentMarket = "Bull"

function startNewGame() {
	// Initialize the stock values inner arrays
	for(i = 0; i < 10; i++) {
		stockValues[i] = new Array(10);
	}
	turnNumber = 1;
	document.getElementById("turn number").innerHTML = "Turn: " + turnNumber;
	currentMarket = bullOrBear();
	var calculator;
	if(currentMarket == "Bull") {
		calculator = bullMarket;
	}
	else {
		calculator = bearMarket;
	}
	//Roll dice to get market value
	var calculatorIndex = diceRoll() - 2
	
	//Calculate initial stock values
	console.log("Calulating Stock Prices:")
	for(i = 1; i < 9; i++) {
		var price = STARTING_STOCK_PRICE + calculator[calculatorIndex][i];
		stockValues[i][turnNumber] = String(price);
		console.log(price);
	}
	//Update the board
	updateBoard();
}

function nextTurn() {
	
}

function updateBoard() {
	console.log("Updating Board:")
	//Set the bond price to 1000, since it never changes
	document.getElementById("1-" + turnNumber).innerHTML = "1000";
	for(i = 2; i < 10; i++) {
		var id = i + "-" + turnNumber;
		var current = document.getElementById(String(id));
		current.innerHTML = String(stockValues[i - 1][turnNumber]);
		console.log(stockValues[i - 1][turnNumber]);
	}
}

function diceRoll() {
	var d1 = Math.floor(Math.random() * 6) + 1;
	var d2 = Math.floor(Math.random() * 6) + 1;
	return d1 + d2;
}

function bullOrBear() {
	if(Math.random >= 0.5) {
		return "Bull";
	}
	return "Bear";
}