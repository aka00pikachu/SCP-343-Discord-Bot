const Commando = require('discord.js-commando');
const bot = new Commando.Client();

class AvatarCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'aang',
            group: 'simple',
            memberName: 'aang',
            description: 'aang gang. aang gang'
        });
    }   
    
    async run(message, args)
    {
		message.channel.sendMessage("aang gang, aang gang. avatar the last airbender is good if you havent watched you can get it here: https://www.amazon.com/The-Boy-in-the-Iceberg/dp/B000GFD4C0/ref=sr_1_3?keywords=avatar+the+last+airbender&qid=1552195715&s=gateway&sr=8-3");
    }
}

module.exports = AvatarCommand;