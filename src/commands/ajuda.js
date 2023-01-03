const { SlashCommandBuilder, PermissionsBitField, SlashCommandStringOption, EmbedBuilder } = require("discord.js");
const config = require("../config.js");
const CommandBase = require('../structures/command.js');
class AjudaCommand extends CommandBase {
    constructor() {
        super({
            data: new SlashCommandBuilder()
                .setName('ajuda')
                .setDescription('Use esse comando para ver as informações.'),
        });
    }

    async execute(interaction, client) {
        const user = interaction.user
        const guild = interaction.guild
        const ajuda = new EmbedBuilder()
	        .setColor('#00ff00')
	        .setTitle(`Central de ajuda`)
            .setDescription(`Olá! ${user}\nSou um bot feito especialmente para o sidercord.`)
            .setThumbnail(guild.iconURL())
            try {
        await interaction.reply({embeds: [ajuda]})
    }
    catch (err) {
        console.log(err)
    }
    }
}

module.exports = new AjudaCommand();