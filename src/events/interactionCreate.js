const { InteractionType } = require('discord.js')

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        console.log(`${interaction.user.tag} em #${interaction.channel.name} usou um comando.`)
    }
}