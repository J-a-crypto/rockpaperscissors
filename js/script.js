// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
let points = 0;
let response1;
let lpoints= 0;

$("#shoot").click(function() {
  //**The computer's answer**//
  let answer = Math.random();
  let response;
  if (answer > 0.66) {
    response = "Rock";
    $("#computerChoice").html("Rock");
  } else if (answer > 0.33) {
    response = "Paper";
    $("#computerChoice").html("Paper");
  } else {
    response = "Scissors";
    $("#computerChoice").html("Scissors");
  }
  console.log(response);
  console.log(answer);

  //**The user's choice**//
  let choice = $("#input").val();
  $("#userChoice").html(`${choice}`);

  //**The game mechanics**//
  if (
    (choice === "Rock" && response === "Scissors") ||
    (choice === "Paper" && response === "Rock") ||
    (choice === "Scissors" && response === "Paper")
  ) {
    $("#result").html("User Wins");
    points = points + 1;
    $(".wins").text(`Wins: ${points}`);
  } else if (
    (response === "Rock" && choice === "Scissors") ||
    (response === "Paper" && choice === "Rock") ||
    (response === "Scissors" && choice === "Paper")
  ) {
    $("#result").html("Computer Wins");
    lpoints = lpoints + 1;
    $(".loses").text(`Losses: ${lpoints}`)
  } else if (response === choice) {
    $("#result").html("Tie! No one wins!");
  } else {
    $("#result").html("You don't make no sense :/");
  }
  //**Point System **//
  console.log(points);
});
//**Button Answers**//
$(".Rock").click(function() {
  //**Computer Math**//
  let answer = Math.random();
  let response;
  if (answer > 0.66) {
    response = "Rock";
    $("#computerChoice").html("Rock");
  } else if (answer > 0.33) {
    response = "Paper";
    $("#computerChoice").html("Paper");
  } else {
    response = "Scissors";
    $("#computerChoice").html("Scissors");
  }
  console.log(response);
  console.log(answer);

  //**The user's choice**//
response1 = "Rock";
  $("#userChoice").text(`${response1}`);
  console.log(response1);
  //**The game mechanics**//
  if (response1 === "Rock" && response === "Scissors") {
    $("#result").html("User Wins");
    points = points + 1;
    $(".wins").text(`Wins: ${points}`);
  } else if (response === "Paper" && response1 === "Rock") {
    $("#result").html("Computer Wins");
    lpoints = lpoints + 1;
    $(".loses").text(`Losses: ${lpoints}`)
  } else if (response === response1) {
    $("#result").html("Tie! No one wins!");
  } else {
    $("#result").html("You don't make no sense :/");
  }
});
$(".Scissor").click(function() {
  //**Computer Math**//
  let answer = Math.random();
  let response;
  if (answer > 0.66) {
    response = "Rock";
    $("#computerChoice").html("Rock");
  } else if (answer > 0.33) {
    response = "Paper";
    $("#computerChoice").html("Paper");
  } else {
    response = "Scissors";
    $("#computerChoice").html("Scissors");
  }
  console.log(response);
  console.log(answer);

  //**The user's choice**//
response1 = "Scissors";
  $("#userChoice").text(`${response1}`);
  console.log(response1);
  //**The game mechanics**//
  if (response1 === "Scissors" && response === "Paper") {
    $("#result").html("User Wins");
    points = points + 1;
    $(".wins").text(`Wins: ${points}`);
  } else if (response === "Rock" && response1 === "Scissors") {
    $("#result").html("Computer Wins");
    lpoints = lpoints + 1;
    $(".loses").text(`Losses: ${lpoints}`)
  } else if (response === response1) {
    $("#result").html("Tie! No one wins!");
  } else {
    $("#result").html("You don't make no sense :/");
  }
});
$(".Paper").click(function() {
   //**Computer Math**//
  let answer = Math.random();
  let response;
  if (answer > 0.66) {
    response = "Rock";
    $("#computerChoice").html("Rock");
  } else if (answer > 0.33) {
    response = "Paper";
    $("#computerChoice").html("Paper");
  } else {
    response = "Scissors";
    $("#computerChoice").html("Scissors");
  }
  console.log(response);
  console.log(answer);

  //**The user's choice**//
response1 = "Paper";
  $("#userChoice").text(`${response1}`);
  console.log(response1);
  //**The game mechanics**//
  if (response1 === "Paper" && response === "Rock") {
    $("#result").html("User Wins");
    points = points + 1;
    $(".wins").text(`Wins: ${points}`);
  } else if (response === "Scissors" && response1 === "Paper") {
    $("#result").html("Computer Wins");
    lpoints = lpoints + 1;
    $(".loses").text(`Losses: ${lpoints}`)
  } else if (response === response1) {
    $("#result").html("Tie! No one wins!");
  } else {
    $("#result").html("You don't make no sense :/");
  }
});
