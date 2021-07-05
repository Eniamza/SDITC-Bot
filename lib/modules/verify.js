const {inputError} = require("../embeds/errors");

module.exports = async function(message,args){

let roll_ID = parseInt(args[0]) //Store Role Number

if(isNaN(roll_ID)=== true){
    inputError(message);
    return;
}

if(roll_ID.toString().length !== 6){

    inputError(message);
    return;
}

    message.channel.send("Message: "+ message);
    message.channel.send("Argument: "+ args);

}