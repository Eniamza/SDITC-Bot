const Discord = require("discord.js");
const config = require("../../config.json")
const prefix = config.prefix;

module.exports = {


    foundEmbed: function (message,discordID)
				{
					const foundEmbed = new Discord.MessageEmbed()
									.setTitle(`Found you, Yay!`)
									.setDescription(`Hey <@${discordID}>, I see you have registered!\nYour verification process will begin shortly!`)
									.setThumbnail('https://raw.githubusercontent.com/Eniamza/SDITC-Bot/main/assets/search.png')
					message.channel.send(foundEmbed)
				},
	alreadyVerifiedonDB: function (message,discordIDcellValue)
				{
					const alreadyVerifiedonDB = new Discord.MessageEmbed()
									.setTitle('You are already verified ᓚᘏᗢ')
									.setDescription("It seems you are verified with this account: "+`\n<@${discordIDcellValue}>`)
									.setImage('https://raw.githubusercontent.com/Eniamza/SDITC-Bot/main/assets/green-tick.gif')
					message.channel.send(alreadyVerifiedonDB)
				},
	verified: function (message,discordID)
				{
					const verified = new Discord.MessageEmbed()
									.setTitle('Welcome to SDITC!')
									.setDescription("You are now verified with this account: "+`\n<@${discordID}>\n`+"Hope you spend a great time with us!")
									.setImage('https://raw.githubusercontent.com/Eniamza/SDITC-Bot/main/assets/sditc.gif')
					message.channel.send(verified)
				},

}

