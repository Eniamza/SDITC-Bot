const { GoogleSpreadsheet } = require('google-spreadsheet');
const {inputError, notfound} = require("../embeds/errors");
const {foundEmbed} = require("../embeds/positive")
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
let discordIDcell; //Discord ID in google sheets
let discordID = message.author.id // Discord ID grabbed from author

for (let index = 0; index < rows.length; index++) {
 
    rollArr[index] = rows[index].Roll;
    
}

indexOfRoll = rollArr.indexOf(roll_ID.toString());

if (indexOfRoll === -1){ //If roll isn't found in the array, throw not found embed and return
    notfound(message);
    return;

    
}


await sheet.loadCells({ startRowIndex: indexOfRoll, endRowIndex: indexOfRoll+2 }) //+2 rows are loaded for safety precautions.
    


foundEmbed(message); //Sends found in our DB embed;
message.channel.send("FOUND in "+`${indexOfRoll+2} no. Row`);
message.channel.send("Discord ID: "+ message.author.id);
console.log(rows[indexOfRoll].Name);
discordIDcell = sheet.getCell(indexOfRoll+1, 3) //Fetches discord ID cell

if(discordIDcell.value === discordID){

    message.channel.send("You are already verified. Don't have the role? Ping an admin now")
    return;
}



discordIDcell.value = discordID;

await sheet.saveUpdatedCells(); //Saves discord ID cell




}