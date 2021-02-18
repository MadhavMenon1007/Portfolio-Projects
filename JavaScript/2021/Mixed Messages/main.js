console.log("Welcome to mixed messages! All you have to do is type in the word \"Generate\" and we will generate a random message for you. \nHave fun!\n\n");

const generateMessage=()=>{

    const message={
        firstPart: ["Hello"],
        secondPart:["there"],
        thirdPart: [""]
    }
    let randomNumber=Math.floor(Math.random()*message.firstPart.length)
    return `Message: ${message.firstPart[randomNumber]} ${message.secondPart[randomNumber]} ${message.thirdPart[randomNumber]}`
}

console.log(generateMessage());