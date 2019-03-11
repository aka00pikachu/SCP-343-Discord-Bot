const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const YTDL = require('ytdl-core');

function Play(connection, message)
{
	var server = servers[message.guild.id]
	server.dipatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
	server.queue.shift();
	server.dipatcher.on("end", function(){
		if(server.queue[0])
		{
			Play(connection,message);
		}
		else
		{
			connection.disconnect();
		}
	});
}

class GoodMusicCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'goodmusic',
            group: 'music',
            memberName: 'goodmusic',
            description: 'yeah good music in the channel your in'
        });
    }   
    
    async run(message)
    {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
				if(!servers[message.guild.id])
				{
					servers[message.guild.id] = {queue: []}
				}
                message.member.voiceChannel.join()
					.then(connection =>{
						var server = servers[message.guild.id];
						message.channel.sendMessage("fine i joined");
						var playmusic = 'https://www.youtube.com/watch?v=RQmEERvqq70'
						server.queue.push(playmusic);
						Play(connection, message);
					})
            }
        }
        else
        {
            message.channel.sendMessage("damit dont you know in order to summon the almighty jesus you must be in a voice channel?");
        }
    }
}

module.exports = GoodMusicCommand;