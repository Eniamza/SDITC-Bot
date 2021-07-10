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
                            

    },
    notfound: function(message)
    {

        const notfound = new Discord.MessageEmbed()
									.setTitle('Uh oh! Your Roll-ID was not found in our Database! :(')
									.setDescription(`Possible reasons:\n`+"```"+"- You're not a valid member\n- You didn't fillup the form correctly[It takes 1-3 days to update properly]\n- I'm mistaking somewhere [Come on! I'm just a bot]"+"```\n"+"If you think it's an error on our side, please ping a @Club Representative for assistance")
									.setThumbnail('https://imgur.com/qP07OiF.png')
					message.channel.send(notfound)
                            

    }

}