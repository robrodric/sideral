const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const config = require("../config");

module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        console.log (`Loguei em ${client.user.tag} (${client.user.id})`);
        
    }
}