

module.exports = async function(message,args){

let roll_ID = parseInt(args[0]) //Store Role Number

if(isNaN(roll_ID)=== true){
    message.channel.send("Error Embed with Inst.");
    return;
}

if(roll_ID.toString().length !== 6){

    message.channel.send("Error Embed with Inst.");
    return;
}

    message.channel.send("Message: "+ message);
    message.channel.send("Argument: "+ args);

}