const Discord = require("discord.js");
const config = require("./config.json");
const prefix = config.prefix;
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
  client.user.setActivity(`Ahoy Ahoy`, { type: 'LISTENING' })
});

client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    console.log(command);
    
    if(command==="ping"){
        message.channel.send("Latency: "+(Date.now()- message.createdTimestamp)+"ms");

    }
    
    });

    client.login(config["bot-token"]);