const Discord = require("discord.js");
const config = require("../../config.json")
const prefix = config.prefix;

module.exports = {


    foundEmbed: function (message)
				{
					const foundEmbed = new Discord.MessageEmbed()
									.setTitle('Yay! I see you!')
									.setDescription("Your verification process will start shortly!")
									.setThumbnail('https://imgur.com/we9Hmx4.png.png')
					message.channel.send(foundEmbed)
				},

}

