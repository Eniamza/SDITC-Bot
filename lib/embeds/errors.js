const Discord = require("discord.js");
const config = require("../../config.json")
const prefix = config.prefix;

module.exports = {

    inputError: function(message)
    {

        const inputError = new Discord.MessageEmbed()
									.setTitle('Oops! Your ROLL-ID is not valid!')
									.setDescription(`You have to enter your 6 Digit Roll in this format:\n`+"`"+`${prefix}verify 201345`+"`")
									.setThumbnail('https://imgur.com/qP07OiF.png')
                                    .setImage('https://imgur.com/paZrOny.png')
					message.channel.send(inputError)
                            

    }

}