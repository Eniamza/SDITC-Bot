const Discord = require("discord.js");
const config = require("../../config.json")
const prefix = config.prefix;

module.exports = {


    foundEmbed: function (message)
				{
					const foundEmbed = new Discord.MessageEmbed()
									.setTitle('I found you in our Database, Yay!')
									.setDescription("Your verification process will begin shortly!")
									.setThumbnail('https://imgur.com/we9Hmx4.png')
					message.channel.send(foundEmbed)
				},
	alreadyVerifiedonDB: function (message,discordIDcellValue)
				{
					const alreadyVerifiedonDB = new Discord.MessageEmbed()
									.setTitle('You are already verified ᓚᘏᗢ')
									.setDescription("It seems you are verified with this account: "+`\n<@${discordIDcellValue}>`)
									.setImage('https://imgur.com/2g91i6w.gif')
					message.channel.send(alreadyVerifiedonDB)
				},

}

