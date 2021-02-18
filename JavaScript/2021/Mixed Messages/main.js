console.log("Welcome to mixed messages! All you have to do is type in the word \"Generate\" and we will generate a random message for you. \nHave fun!");

const generate_message=()=>{

    const message={
        firstPart: [],
        secondPart:[],
        thirdPart: []
    }
    let randomNumber=Math.floor(Math.random()*this.firstPart.length)
    return `${message.firstPart} ${message.secondPart} ${message.thirdPart}`
}

