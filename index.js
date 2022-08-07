const { Client, GatewayIntentBits, Partials, Collection, PermissionsBitField } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds, 
		GatewayIntentBits.GuildMessages, 
		GatewayIntentBits.GuildPresences, 
		GatewayIntentBits.GuildMessageReactions, 
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers
	], 
	partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction] 
});

const config =  require('./config.json')

client.slashCommands = new Collection();

module.exports = client;


['slashCommand', 'events'].forEach((handler) => {
  require(`./handlers/${handler}`)(client)
});


client.login(config.Settings.Token)
