console.log("Hello World")

    function getComputerChoice(max) {
        return Math.floor(Math.random()*max);
    }

    if (getComputerChoice == 0) {
        console.log("Rock");
    } else if (getComputerChoice == 1){
        console.log("Paper");
    } else {
        console.log("Scissor");
    }