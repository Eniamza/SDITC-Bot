const { GoogleSpreadsheet } = require('google-spreadsheet');
const {inputError} = require("../embeds/errors");
const axios = require("axios");
const {discord} = require("discord.js");

module.exports = async function(message,args){

//Members DB ID = https://docs.google.com/spreadsheets/d/{DOC-ID}}/

let roll_ID = parseInt(args[0]) //Store Role Number




if(args.length !== 1){

    inputError(message);
    return;

}

if(isNaN(roll_ID)=== true){
    inputError(message);
    return;
}

if(roll_ID.toString().length !== 6){

    inputError(message);
    return;
}

if(message.member.roles.cache.some(role => role.id === '608238654095360010')){
    console.log("You are already verified!");
    message.channel.send("You are already verified!");
    return;
}



//Gsheet API INIT
const creds = require("../../secret.json"); //Import auth details from secret.json
const doc = new GoogleSpreadsheet('1NiY5jei_uFUlkeepvpyro2lB2ZfdRqwJtZP_qn0bDCA');
await doc.useServiceAccountAuth(creds); // Wait for auth to initialize;

await doc.loadInfo() //loads DOC PROPS
const sheet = doc.sheetsByIndex[0]; //Selects first sheet
const rows = await sheet.getRows(); //Gets all rows


let rollArr=[]; //array of roles to store from the following loop

for (let index = 0; index < rows.length; index++) {
 
    rollArr[index] = rows[index].Roll;
    
}

indexOfRoll = rollArr.indexOf(roll_ID.toString());

if (indexOfRoll === -1){
    message.channel.send("NOT FOUND embed")
    return;

    
}
    
message.channel.send("Found Embed")
message.channel.send("FOUND in "+`${indexOfRoll} no. Row`);



}