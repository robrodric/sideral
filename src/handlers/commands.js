const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
const fs = require('fs');
const path = require('path');
const config = require('../config.js');

module.exports = async client => {
    commandsArray = [];
    fs.readdirSync(path.join(__dirname, '..', 'commands')).filter(file => file.endsWith('.js')).forEach(file => {
        const command = require(`../commands/${file}`);
        if(!command.active) return;
        client.commands.set(command.data.name, command);
        commandsArray.push(command.data.toJSON());
        console.log(`Comando: ${command.data.name} foi carregado com sucesso!`);
    });
    const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN);
    try {
        console.log('Reiniciando comandos')
        await rest.put(
            Routes.applicationCommands(config.sideral/*, config.guild*/), {
                body: commandsArray,
            });
        console.log('Comandos reiniciados');
    } catch (error) {
        console.error(error);
    }
}