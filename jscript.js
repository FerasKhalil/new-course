"use sctrict";
let userName = prompt("what is your name?");
let ageQuestion = prompt("how old do you think i am?");
let thirdQuestion = prompt("do you think i have always been a web-developer? yes/no y/n");
let fourthQuestion = prompt("do you think i wear glasses? yes/no y/n");
let fifthQuestion = prompt("do i like psychology? yes/no y/n");
let sixthQuestion = prompt("do you think i'm a cat person and not a dog person? yes/no y/n");
let seventhQuestion = prompt("do you think i like music? yes/no y/n");

let ageAnswer = "";
let thirdAnswer = "";
let fourthAnswer = "";
let fifthAnswer = "";
let sixthAnswer = "";
let seventhAnswer = "";


console.log("nice meeting you " + userName);
if (ageQuestion == 22) {
    ageAnswer = "you were right i am 22";
    console.log(ageAnswer);
}
else {
    ageAnswer = " but you were wrong i am 22 years old";
    console.log(ageAnswer);
}

if (thirdQuestion.toLowerCase() == "yes" || thirdQuestion.toLowerCase() == "y") {
    thirdAnswer = "you were wrong i haven't been always a web-developer";
    console.log(thirdAnswer);
}
else {
    thirdAnswer = "you were right i used to be a barista before getting into web-development";
    console.log(thirdAnswer);

}

if (fourthQuestion.toLowerCase() == "yes" || fourthQuestion.toLowerCase() == "y") {
    fourthAnswer = "you're right i do wear glasses";
    console.log(fourthAnswer);
}
else {
    fourthAnswer = "you are wrong i do wear glasses";
    console.log(fourthAnswer);
}

if (fifthQuestion.toLowerCase() == "yes" || fifthQuestion.toLowerCase() == "y") {
    fifthAnswer = "you're right i love psychology";
    console.log(fifthAnswer);
}
else {
    fifthAnswer = "you are wrong i love psychology";
    console.log(fifthAnswer);
}

if (sixthQuestion.toLowerCase() == "yes" || sixthQuestion.toLowerCase() == "y") {

    sixthAnswer = "you're right i am a cat person";
    console.log(sixthAnswer);
}
else {
    sixthAnswer = "you're wrong i'm a cat person";
    console.log(sixthAnswer);
}

if (seventhQuestion.toLowerCase() == "yes" || seventhQuestion.toLowerCase() == "y") {
    seventhAnswer = "true, i listen to music 24/7";
    console.log(seventhAnswer);
}
else {
    seventhAnswer = "you are wrong, i do love music!";
    console.log(seventhAnswer);
}

alert("nice meeting you " + userName + "\n"
    + "your think i'm " + ageQuestion + " years old , " + ageAnswer + "\n"
    + "your answer is " + thirdQuestion + " , " + thirdAnswer + "\n"
    + "your answer is " + fourthQuestion + " , " + fourthAnswer + "\n"
    + "your answer is " + fifthQuestion + " , " + fifthAnswer + "\n"
    + "you answered " + sixthQuestion + " , " + sixthAnswer + "\n"
    + "you answered " + seventhQuestion + " , " + seventhAnswer);
