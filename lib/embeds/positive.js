const Discord = require("discord.js");
const config = require("../../config.json")
const prefix = config.prefix;

module.exports = {


    foundEmbed: function (message)
				{
					const foundEmbed = new Discord.MessageEmbed()
									.setTitle('I found you in our Database, Yay!')
									.setDescription("Your verification process will begin shortly!")
									.setThumbnail('https://imgur.com/we9Hmx4.png.png')
					message.channel.send(foundEmbed)
				},

}

