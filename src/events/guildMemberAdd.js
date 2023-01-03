const { EmbedBuilder } = require('discord.js');
const config = require('../config.js');

module.exports = {
    name: 'guildMemberAdd',
    execute: async (member, client) => {
        console.log(`${member.user} acabou de entrar no sidercord!`)
    },
};