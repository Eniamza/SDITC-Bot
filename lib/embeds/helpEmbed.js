const Discord = require("discord.js");
const config = require("../../config.json")
const prefix = config.prefix;

module.exports = {


    help: function (message)
				{
					const help = new Discord.MessageEmbed()
									.setTitle('SDITC Buddy')
									.setDescription("Our Buddy bot to help with general works!")
									.setThumbnail('https://imgur.com/N43EVYS.png')
                 					.addFields(
                                        { name: `${prefix}help`, value: '\nShows this help message'},
                                        { name: `${prefix}verify`, value: "\nInitiates verification process for club members with Database\n"+"Example:\n"+"`"+`${prefix}verify roll_number | ${prefix}verify 201234`+"`"},
										{ name: `${prefix}ping`, value: "\nShow response Latency"},
                                    )
									.addFields(

                                        { name: "Visit Our Web!", value: '[bafsditc.org](https://bafsditc.org)', inline: true},
										{ name: "Like Our Page!", value: '[SDITC Official Page](https://www.facebook.com/bafsditc)', inline: true},
										{ name: "Tweet to us!", value: "[SDITC Twitter](https://twitter.com/bafsditc)", inline: true},
                                    )
									.setFooter("Version: 0.2.0~beta")
					message.channel.send(help)
				},

}

