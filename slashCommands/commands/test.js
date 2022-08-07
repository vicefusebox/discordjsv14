const client = require('../../index')
const { EmbedBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
    name: 'test',
    description: 'test command description',
    type: ApplicationCommandType.ChatInput, // ApplicationCommandType.Message = ContextMenu Message, ApplicationCommandType.User = ContextMenu User, ApplicationCommandType.ChatInput = Normal Slash Command
    // default_member_permissions: 'ManageRoles', // permission required for the command


    run: async (client, interaction) => {

    const response = new EmbedBuilder()
    .setTitle('this is a title')
    .setDescription('and this is the description')
    .setFooter({ text: 'footer is here!'})

    interaction.reply({
        embeds: [response]
    })

    }
};
