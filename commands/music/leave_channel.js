const Commando = require('discord.js-commando');
const bot = new Commando.Client();

class LeaveChannelCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'leaves channel your in'
        });
    }   
    
    async run(message, args)
    {
		if (message.guild.voiceConnection)
		{
			message.guild.voiceConnection.disconnect();
		}
		else
		{
			message.reply("what it wrong with you? im not in a voice channel");
		}
    }
}

module.exports = LeaveChannelCommand;