const { SlashCommandBuilder, PermissionsBitField, SlashCommandStringOption, EmbedBuilder } = require("discord.js");
const config = require("../config.js");
const CommandBase = require('../structures/command.js');
class PingCommand extends CommandBase {
    constructor() {
        super({
            data: new SlashCommandBuilder()
                .setName('ping')
                .setDescription('Use esse comando para ver o ping do bot.'),
        });
    }

    async execute(interaction, client) {
        const user = interaction.user
        const guild = interaction.guild
        const ping = new EmbedBuilder()
	        .setColor('#00ff00')
	        .setTitle(`Pong!`)
            .setDescription(`Olá! ${user}\nPing: ${client.ws.ping}`)
            .setThumbnail(guild.iconURL())
            try {
        await interaction.reply({embeds: [ping]})
    }
    catch (err) {
        console.log(err)
    }
    }
}

module.exports = new PingCommand();