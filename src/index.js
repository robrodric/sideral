require('./database.js')

const { Client, Collection, GatewayIntentBits, Partials, ActivityType } = require('discord.js')
const fs = require('fs');
const path = require('path');
const env = require('dotenv').config()

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildVoiceStates],
    partials: [Partials.GuildMember],
    allowedMentions: {repliedUser: false},
});
client.commands = new Collection();

// client.user.setActivity('SrSider', { type: ActivityType.Listening });

const handlerFiles = fs.readdirSync(path.join(__dirname, 'handlers')).filter(file => file.endsWith('.js'));

(async () => {
    for(const file of handlerFiles) await require(`./handlers/${file}`)(client);
    
    await client.login();
})();