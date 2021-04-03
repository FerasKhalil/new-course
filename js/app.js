"use sctrict";
let userName = prompt("what is your name?");

let ageAnswer = "";
let thirdAnswer = "";
let fourthAnswer = "";
let fifthAnswer = "";
let sixthAnswer = "";
let seventhAnswer = "";
let eighthAnswer = "a";
let score = 0;

console.log("nice meeting you " + userName);
let ageQuestion = prompt("how old do you think i am?");
if(isNaN(ageQuestion))
{
    alert("can only enter numbers..");
}
else if (ageQuestion == 22) {
    ageAnswer = "you were right i am 22";
    console.log(ageAnswer);
    score++;
}


else { 
    ageAnswer = " but you were wrong i am 22 years old";
    console.log(ageAnswer);
}


let thirdQuestion = prompt("do you think i have always been a web-developer? only yes/no y/n answers");
if (thirdQuestion.toLowerCase() == "yes" || thirdQuestion.toLowerCase() == "y") {
    thirdAnswer = "you were wrong i haven't been always a web-developer";
    console.log(thirdAnswer);
}
else {
    thirdAnswer = "you were right i used to be a barista before getting into web-development";
    console.log(thirdAnswer);
    score++;
}


let fourthQuestion = prompt("do you think i wear glasses? only yes/no y/n answers");
 if (fourthQuestion.toLowerCase() == "yes" || fourthQuestion.toLowerCase() == "y") {
    fourthAnswer = "you're right i do wear glasses";
    console.log(fourthAnswer);
    score++;
}
else {
    fourthAnswer = "you are wrong i do wear glasses";
    console.log(fourthAnswer);
}


let fifthQuestion = prompt("do i like psychology? only yes/no y/n answers");
 if (fifthQuestion.toLowerCase() == "yes" || fifthQuestion.toLowerCase() == "y") {
    fifthAnswer = "you're right i love psychology";
    console.log(fifthAnswer);
    score++;
}
else {
    fifthAnswer = "you are wrong i love psychology";
    console.log(fifthAnswer);
}


let sixthQuestion = prompt("do you think i'm a cat person and not a dog person? only yes/no y/n answers");


 if (sixthQuestion.toLowerCase() == "yes" || sixthQuestion.toLowerCase() == "y") {

    sixthAnswer = "you're right i am a cat person";
    console.log(sixthAnswer);
    score++;
}
else {
    sixthAnswer = "you're wrong i'm a cat person";
    console.log(sixthAnswer);
}


let seventhQuestion = prompt("do you think i like music? only yes/no y/n answers");
if (seventhQuestion.toLowerCase() == "yes" || seventhQuestion.toLowerCase() == "y") {
    seventhAnswer = "true, i listen to music 24/7";
    console.log(seventhAnswer);
    score++;
}
else {
    seventhAnswer = "you are wrong, i do love music!";
    console.log(seventhAnswer);
}


eighthQuestion = ["white", "yellow", "green", "blue", "black", "red", "orange", "brown"];
let j = 1;
while (eighthAnswer !== "green" && j !== 6) {
    if (eighthAnswer == "green") { score++; }
    eighthAnswer = prompt("of these what do you think my favorite color is? \n" + eighthQuestion);

    console.log("your answer is " + eighthAnswer);
    j++;
}
alert("the right answer is green");

console.log("the right answer is green!");

alert("let's play a game i call the lucky number \n you have 4 chances to guess the number ");
let luckyNumber = 0;
let counter = 0;
for (let i = 1; i <= 4; i++) {
    luckyNumber = prompt("pick a number 1-10");
    if (luckyNumber < 9)
        alert("your guess is too low try something higher");
    else if (luckyNumber > 9)
        alert("your guess is too high, try something lower");
    else if (luckyNumber == 9) {
        alert("you're right! the lucky number is 9");
        score++;
        break;
    }
    counter++;
    alert("guess number: " + counter);
}

alert("nice meeting you " + userName + "\n"
    + "you think i'm " + ageQuestion + " years old , " + ageAnswer + "\n"
    + "your answer is " + thirdQuestion + " , " + thirdAnswer + "\n"
    + "your answer is " + fourthQuestion + " , " + fourthAnswer + "\n"
    + "your answer is " + fifthQuestion + " , " + fifthAnswer + "\n"
    + "you answered " + sixthQuestion + " , " + sixthAnswer + "\n"
    + "you answered " + seventhQuestion + " , " + seventhAnswer + "\n"
    + "my favorite color is green " + " your last answer was: " + eighthAnswer + "\n"
    + "your score is: " + score);
