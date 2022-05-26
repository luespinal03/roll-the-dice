const prompt = require('prompt-sync')({
    sigint: true
});

let userInput = (prompt("Welcome to roll the dice, enter a number betweem 1 and 6: "));

if (userInput === "6"){
    console.log(Math.ceil(Math.random()*6));
} else if(userInput === "1"){
    console.log(Math.ceil(Math.random()*6));
} else if(userInput === "2"){ // RIGGED
    console.log(Math.ceil(Math.random()*3));
} else if(userInput === "3"){
    console.log(Math.ceil(Math.random()*6));
} else if(userInput === "4"){
    console.log(Math.ceil(Math.random()*6));
} else if(userInput === "5"){
    console.log(Math.ceil(Math.random()*6));
} else if(userInput === "6"){
    console.log(Math.ceil(Math.random()*6));
} else{
    console.log("error");
}