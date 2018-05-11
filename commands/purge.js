exports.run = function(client, message, args) {
	let messagecount = parseInt(args.join(' '));
	message.channel.fetchMessages({
	  limit: messagecount
	}).then(messages => message.channel.bulkDelete(messages));
  };
  
  exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 2
  };
  
  exports.help = {
	name: 'purge',
	description: 'Supprime X ligne(s) de discussion dans un channel.',
	usage: 'purge <nombre>'
  };