exports.run = (client, message) => {
	message.channel.sendMessage('Ping?')
	  .then(msg => {
		msg.edit(`Pong ! (Speedtest made in china : ${msg.createdTimestamp - message.createdTimestamp}ms)`);
	  });
  };
  
  exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
  };
  
  exports.help = {
	name: 'ping',
	description: 'Je me demande à quoi cela sert',
	usage: 'ping'
  };