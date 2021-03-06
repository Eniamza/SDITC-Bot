const { GoogleSpreadsheet } = require('google-spreadsheet');
const {inputError, notfound} = require("../embeds/errors");
const {foundEmbed, alreadyVerifiedonDB,verified} = require("../embeds/positive")
const {discord} = require("discord.js");
const config = require("../../config.json")

module.exports = async function(message,args){

//Members DB ID = https://docs.google.com/spreadsheets/d/{DOC-ID}}/

let roll_ID = parseInt(args[0]) //Store Role Number
let verifiedRoleID = config.verifiedRoleId



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
// THIS PART VERIFIES "CLUB MEMBER" ROLE.
//if(message.member.roles.cache.some(role => role.id === '608238654095360010')){
//    console.log("You are already verified!");
//    message.channel.send("You are already verified!");
//    return;
//}
///////////////////////////////////////////////////////////////////////////////////////


//Gsheet API INIT
const creds = require("../../secret.json"); //Import auth details from secret.json
const doc = new GoogleSpreadsheet('1NiY5jei_uFUlkeepvpyro2lB2ZfdRqwJtZP_qn0bDCA');
await doc.useServiceAccountAuth(creds); // Wait for auth to initialize;

await doc.loadInfo() //loads DOC PROPS
const sheet = doc.sheetsByIndex[0]; //Selects first sheet
const rows = await sheet.getRows(); //Gets all rows

let indexOfRoll;

let rollArr=[]; //array of roles to store from the following loop
let discordIDArr=[];

let discordIDcell; //Discord ID in google sheets
let discordIDcellValue;
let discordID = message.author.id // Discord ID grabbed from author

console.log(discordID);

for (let index = 0; index < rows.length; index++) {
 
    rollArr[index] = rows[index].Roll;
    
}

indexOfRoll = rollArr.indexOf(roll_ID.toString());

if (indexOfRoll === -1){ //If roll isn't found in the array, throw not found embed and return
    notfound(message);
    return;

    
}

foundEmbed(message,discordID); //Sends found in our DB embed;

await sheet.loadCells({ startRowIndex: indexOfRoll, endRowIndex: indexOfRoll+2 }) //+2 rows are loaded for safety precautions.
  
for (let index = 0; index < rows.length; index++) {
 
    discordIDArr[index] = rows[index].DiscordID;
    
}

let isdiscordIDonDB = discordIDArr.includes(`${discordID}`)

console.log(isdiscordIDonDB)

//message.channel.send("FOUND in "+`${indexOfRoll+2} no. Row`);
//message.channel.send("Discord ID: "+ message.author.id);
console.log(rows[indexOfRoll].Name);
discordIDcell = sheet.getCell(indexOfRoll+1, 3) //Fetches discord ID cell
discordIDcellValue = discordIDcell.value
console.log(discordIDcell.value);

const clubMemberRole = message.guild.roles.cache.get(`${verifiedRoleID}`);

//!message.member.roles.cache.some(role => role.id === `${verifiedRoleID}`)
  

if(discordIDcell.value !== null || isdiscordIDonDB){

    console.log(discordIDcell.value);
if(isdiscordIDonDB){ // IF Message author's ID is on DB use that as verified ID 

    let verifiedID = discordID;

    alreadyVerifiedonDB(message,verifiedID); 

}
else{ //if(discordIDcell.Value !== null){ //IF queried role has a DiscordID use that as verified ID
    let verifiedID = discordIDcell.value

    alreadyVerifiedonDB(message,verifiedID);

}

    
//if(!message.member.roles.cache.has(`${verifiedRoleID}`)){

//        message.member.roles.add(clubMemberRole);
        
//}

return;
}

discordIDcell.value = discordID; //Assign Discord ID value to Gsheet Cell
await sheet.saveUpdatedCells(); //Saves discord ID cell

message.member.roles.add(clubMemberRole);
verified(message,discordID);

}