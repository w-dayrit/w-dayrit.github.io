console.log('activate framework!');

var deck = [  {rank: "A", suit: "♣", color: "black", value: 1, img: "card cA"},
              {rank: "2", suit: "♣", color: "black", value: 2, img: "card c02"},
              {rank: "3", suit: "♣", color: "black", value: 3, img: "card c03"},
              {rank: "4", suit: "♣", color: "black", value: 4, img: "card c04"},
              {rank: "5", suit: "♣", color: "black", value: 5, img: "card c05"},
              {rank: "6", suit: "♣", color: "black", value: 6, img: "card c06"},
              {rank: "7", suit: "♣", color: "black", value: 7, img: "card c07"},
              {rank: "8", suit: "♣", color: "black", value: 8, img: "card c08"},
              {rank: "9", suit: "♣", color: "black", value: 9, img: "card c09"},
              {rank: "10", suit: "♣", color: "black", value: 10, img: "card c10"},
              {rank: "J", suit: "♣", color: "black", value: 11, img: "card cJ"},
              {rank: "Q", suit: "♣", color: "black", value: 12, img: "card cQ"},
              {rank: "K", suit: "♣", color: "black", value: 13, img: "card cK"},
              {rank: "A", suit: "♠", color: "black", value: 1, img: "card sA"},
              {rank: "2", suit: "♠", color: "black", value: 2, img: "card s02"},
              {rank: "3", suit: "♠", color: "black", value: 3, img: "card s03"},
              {rank: "4", suit: "♠", color: "black", value: 4, img: "card s04"},
              {rank: "5", suit: "♠", color: "black", value: 5, img: "card s05"},
              {rank: "6", suit: "♠", color: "black", value: 6, img: "card s06"},
              {rank: "7", suit: "♠", color: "black", value: 7, img: "card s07"},
              {rank: "8", suit: "♠", color: "black", value: 8, img: "card s08"},
              {rank: "9", suit: "♠", color: "black", value: 9, img: "card s09"},
              {rank: "10", suit: "♠", color: "black", value: 10, img: "card s10"},
              {rank: "J", suit: "♠", color: "black", value: 11, img: "card sJ"},
              {rank: "Q", suit: "♠", color: "black", value: 12, img: "card sQ"},
              {rank: "K", suit: "♠", color: "black", value: 13, img: "card sK"},
              {rank: "A", suit: "♥", color: "red", value: 1, img: "card hA"},
              {rank: "2", suit: "♥", color: "red", value: 2, img: "card h02"},
              {rank: "3", suit: "♥", color: "red", value: 3, img: "card h03"},
              {rank: "4", suit: "♥", color: "red", value: 4, img: "card h04"},
              {rank: "5", suit: "♥", color: "red", value: 5, img: "card h05"},
              {rank: "6", suit: "♥", color: "red", value: 6, img: "card h06"},
              {rank: "7", suit: "♥", color: "red", value: 7, img: "card h07"},
              {rank: "8", suit: "♥", color: "red", value: 8, img: "card h08"},
              {rank: "9", suit: "♥", color: "red", value: 9, img: "card h09"},
              {rank: "10", suit: "♥", color: "red", value: 10, img: "card h10"},
              {rank: "J", suit: "♥", color: "red", value: 11, img: "card hJ"},
              {rank: "Q", suit: "♥", color: "red", value: 12, img: "card hQ"},
              {rank: "K", suit: "♥", color: "red", value: 13, img: "card hK"},
              {rank: "A", suit: "♦", color: "red", value: 1, img: "card dA"},
              {rank: "2", suit: "♦", color: "red", value: 2, img: "card d02"},
              {rank: "3", suit: "♦", color: "red", value: 3, img: "card d03"},
              {rank: "4", suit: "♦", color: "red", value: 4, img: "card d04"},
              {rank: "5", suit: "♦", color: "red", value: 5, img: "card d05"},
              {rank: "6", suit: "♦", color: "red", value: 6, img: "card d06"},
              {rank: "7", suit: "♦", color: "red", value: 7, img: "card d07"},
              {rank: "8", suit: "♦", color: "red", value: 8, img: "card d08"},
              {rank: "9", suit: "♦", color: "red", value: 9, img: "card d09"},
              {rank: "10", suit: "♦", color: "red", value: 10, img: "card d10"},
              {rank: "J", suit: "♦", color: "red", value: 11, img: "card dJ"},
              {rank: "Q", suit: "♦", color: "red", value: 12, img: "card dQ"},
              {rank: "K", suit: "♦", color: "red", value: 13, img: "card dK"} ];



var shuffledDeck = new Array(deck.length);

var random = 0;

for (var i = 0; i < shuffledDeck.length; i++) {
  random = Math.random()*deck.length;
  shuffledDeck[i] = deck.splice(random,1)[0];
}

var upcomingCard;
var currentCard = [];

// Pushes last card from shuffledDeck array to currentCard. Displays currentCard
var dealCard = function() {
  if (currentCard.length === 0) {
    currentCard.push(shuffledDeck.pop());
    console.log("Current card: " + currentCard[0].rank + "" + currentCard[0].suit);
    upcomingCard = shuffledDeck[shuffledDeck.length - 1];
    console.log("Upcoming card: " + upcomingCard.rank + upcomingCard.suit);
    console.log(shuffledDeck.length);
    $('#dealtCard').removeClass().addClass(currentCard[0].img);
  }
}

var cardStack = [];
//count for correct guesses;
var countThree = 0;

var boardStack = $('.cards');

//pushes the currentCard to the cardStack. Displays stack on the board
var buildCardStack = function() {
  cardStack.push(currentCard.pop());
  countThree++;
  console.log(cardStack);
  console.log("Correct guesses:" + countThree);
  for (var i = 0; i < 52; i++) {
    if (boardStack.eq(i).html() === "") {
      boardStack.eq(i).html(cardStack[i].rank + cardStack[i].suit).addClass(cardStack[i].img);
      return;
    }
  }
}


var currentPlayer = "1";

//switches player
var switchPlayer = function() {
  if (currentPlayer === "1") {
    currentPlayer = "2";
    $('.playerTurn').html("PLAYER " + currentPlayer + "'S TURN");
  } else if (currentPlayer === "2") {
    currentPlayer = "1";
    $('.playerTurn').html("PLAYER " + currentPlayer + "'S TURN");
  }
}

var playerOneStack = [];
var playerTwoStack = [];

var playerOneBoard = $('.playerOneStack');
var playerTwoBoard = $('.playerTwoStack');

//clear cards on board
var clearBoardStack = function() {
  for (var i = 0; i < cardStack.length; i++) {
      if (boardStack.eq(i).html() != "") {
        boardStack.eq(i).html("").removeClass().addClass("cards")
      }
    }
}

//takes entire cardStack and adds it to player's stack
var buildPlayerStack = function() {
  if (currentPlayer === "1") {
    alert("WRONG! Add the board stack to your hand!");
    countThree = 0;
    playerOneStack.push(currentCard.pop());
    while (cardStack.length != 0) {
      playerOneStack.push(cardStack.pop());
    }
    for (var i = 0; i < playerOneStack.length; i++) {
      if (playerOneBoard.eq(i).html() === "") {
        playerOneBoard.eq(i).html(playerOneStack[i].rank + playerOneStack[i].suit).addClass(playerOneStack[i].img)
      }
    }
    console.log("Player " + currentPlayer + "'s stack: " + playerOneStack.length);
  } else if (currentPlayer === "2") {
    alert("WRONG! Add the board stack to your hand!");
    countThree = 0;
    playerTwoStack.push(currentCard.pop());
    while (cardStack.length != 0) {
      playerTwoStack.push(cardStack.pop());
    }
    for (var i = 0; i < playerTwoStack.length; i++) {
      if (playerTwoBoard.eq(i).html() === "") {
        playerTwoBoard.eq(i).html(playerTwoStack[i].rank + playerTwoStack[i].suit).addClass(playerTwoStack[i].img)
      }
    }
    console.log("Player " + currentPlayer + "'s stack: " + playerTwoStack.length);
  }
}

//check if player should drink
var checkDrink = function() {
  // if current player's stack % 4 = 0 - DRINK
  if (currentPlayer === "1") {
    if (playerOneStack.length % 4 === 0) {
      alert("You've collected 4 cards. DRINK UP!");
    }
  } else if (currentPlayer === "2") {
    if (playerTwoStack.length % 4 === 0) {
      alert("You've collected 4 cards. DRINK UP!");
    }
  }
}

$('#dealButton').on("click", dealCard);


$('#high').on("click", function() {
  if (upcomingCard.value >= currentCard[0].value) {
    alert("Correct! " + upcomingCard.rank + upcomingCard.suit + " is greater than / equal to " + currentCard[0].rank + currentCard[0].suit + ". Keep going!");
    buildCardStack();
    dealCard();
  } else {
    clearBoardStack();
    buildPlayerStack();
    checkDrink();
    dealCard();
  }
})

$('#low').on("click", function() {
  if (upcomingCard.value <= currentCard[0].value) {
    alert("Correct! " + upcomingCard.rank + upcomingCard.suit + " is lower than / equal to " + currentCard[0].rank + currentCard[0].suit + ". Keep going!");
    buildCardStack();
    dealCard();
  } else {
    clearBoardStack();
    buildPlayerStack();
    checkDrink();
    dealCard();
  }
})

$('#red').on("click", function() {
  if (upcomingCard.color === "red") {
    alert("Correct! " + upcomingCard.rank + upcomingCard.suit + " is RED. Keep going!");
    buildCardStack();
    dealCard();
  } else {
    clearBoardStack();
    buildPlayerStack();
    checkDrink();
    dealCard();
  }
})

$('#black').on("click", function() {
  if (upcomingCard.color === "black") {
    alert("Correct! " + upcomingCard.rank + upcomingCard.suit + " is BLACK. Keep going!");
    buildCardStack();
    dealCard();
  } else {
    clearBoardStack();
    buildPlayerStack();
    checkDrink();
    dealCard();
  }
})

$('#in').on("click", function() {
  if ((upcomingCard.value < cardStack[cardStack.length-1].value && upcomingCard.value > currentCard[0].value) ||
    (upcomingCard.value > cardStack[cardStack.length-1].value && upcomingCard.value < currentCard[0].value)) {
    alert("Correct! " + upcomingCard.rank + upcomingCard.suit + " is between the last 2 cards. Keep going!");
    buildCardStack();
    dealCard();
  } else {
    clearBoardStack();
    buildPlayerStack();
    checkDrink();
    dealCard();
  }
})

$('#out').on("click", function() {
  if (!((upcomingCard.value < cardStack[cardStack.length-1].value && upcomingCard.value > currentCard[0].value) ||
    (upcomingCard.value > cardStack[cardStack.length-1].value && upcomingCard.value < currentCard[0].value))) {
    alert("Correct! " + upcomingCard.rank + upcomingCard.suit + " is outside the last 2 cards. Keep going!");
    buildCardStack();
    dealCard();
  } else {
    clearBoardStack();
    buildPlayerStack();
    checkDrink();
    dealCard();
  }
})

$('#spade').on("click", function() {
  if (upcomingCard.suit === "♠") {
    alert("Correct! " + upcomingCard.rank + upcomingCard.suit + " is a ♠. Keep going!");
    buildCardStack();
    dealCard();
  } else {
    clearBoardStack();
    buildPlayerStack();
    checkDrink();
    dealCard();
  }
})

$('#club').on("click", function() {
  if (upcomingCard.suit === "♣") {
    alert("Correct! " + upcomingCard.rank + upcomingCard.suit + " is a ♣. Keep going!");
    buildCardStack();
    dealCard();
  } else {
    clearBoardStack();
    buildPlayerStack();
    checkDrink();
    dealCard();
  }
})

$('#heart').on("click", function() {
  if (upcomingCard.suit === "♥") {
    alert("Correct! " + upcomingCard.rank + upcomingCard.suit + " is a ♥. Keep going!");
    buildCardStack();
    dealCard();
  } else {
    clearBoardStack();
    buildPlayerStack();
    checkDrink();
    dealCard();
  }
})

$('#diamond').on("click", function() {
  if (upcomingCard.suit === "♦") {
    alert("Correct! " + upcomingCard.rank + upcomingCard.suit + " is a ♦. Keep going!");
    buildCardStack();
    dealCard();
  } else {
    clearBoardStack();
    buildPlayerStack();
    checkDrink();
    dealCard();
  }
})

$('#pass').on("click", function() {
  if (countThree >= 3) {
    alert("Player " + currentPlayer + " passed!")
    countThree = 0;
    switchPlayer();
  } else {
    alert("SORRY! You haven't guessed correctly 3 times in a row! Keep guessing!");
  }
})

