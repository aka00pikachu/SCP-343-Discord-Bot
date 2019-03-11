const Commando = require('discord.js-commando');
const bot = new Commando.Client();

class AvatarCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'avatar',
            group: 'simple',
            memberName: 'avatar',
            description: 'what do you expect? to see yourself?'
        });
    }   
    
    async run(message, args)
    {
		message.reply(message.author.avatarURL);
    }
}

module.exports = AvatarCommand;