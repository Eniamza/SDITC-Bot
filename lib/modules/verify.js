

module.exports = async function(message,args){

let roll_ID = parseInt(args[0]) //Store Role Number

if(isNaN(roll_ID)=== true){
    message.channel.send("Error Embed");
    return;
}

    message.channel.send("Message: "+ message);
    message.channel.send("Argument: "+ args);

}