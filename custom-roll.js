const prompt = require('prompt-sync')({
    sigint: true
});


let userInput = (prompt("How many sides should the dice have? (choose between 2,4,6,8,10): "));

if (userInput === "6"){
    console.log(Math.ceil(Math.random()*6));
} else if(userInput === "2"){
    console.log(Math.ceil(Math.random()*2));
} else if(userInput === "4"){
    console.log(Math.ceil(Math.random()*4));
} else if(userInput === "8"){
    console.log(Math.ceil(Math.random()*8));
} else if (userInput === "10"){
    console.log(Math.ceil(Math.random()*10));
} else {
    console.log("error");
}