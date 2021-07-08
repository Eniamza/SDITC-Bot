const { GoogleSpreadsheet } = require('google-spreadsheet');
const {inputError} = require("../embeds/errors");
const axios = require("axios");

module.exports = async function(message,args){

//Members DB ID = https://docs.google.com/spreadsheets/d/{DOC-ID}}/

let roll_ID = parseInt(args[0]) //Store Role Number

if(isNaN(roll_ID)=== true){
    inputError(message);
    return;
}

if(roll_ID.toString().length !== 6){

    inputError(message);
    return;
}

//Gsheet API INIT
const creds = require("../../secret.json"); //Import auth details from secret.json
const doc = new GoogleSpreadsheet('1NiY5jei_uFUlkeepvpyro2lB2ZfdRqwJtZP_qn0bDCA');
await doc.useServiceAccountAuth(creds); // Wait for auth to initialize;

await doc.loadInfo()
const sheet = doc.sheetsByIndex[0];
const rows = await sheet.getRows();



console.log(rows[0]);
message.channel.send("Message successfully passed!");


}