exports.run = (client, message, args) => {
	let command;
	if (client.commands.has(args[0])) {
	  command = args[0];
	} else if (client.aliases.has(args[0])) {
	  command = client.aliases.get(args[0]);
	}
	if (!command) {
	  return message.channel.sendMessage(`Je ne trouve pas la commande : ${args[0]}`);
	} else {
	  message.channel.sendMessage(`Rechargement de la commande : ${command}`)
		.then(m => {
		  client.reload(command)
			.then(() => {
			  m.edit(`Rechargement de la commande : ${command} avec succès`);
			})
			.catch(e => {
			  m.edit(`Echec du rechargement de la commande : ${command}\n\`\`\`${e.stack}\`\`\``);
			});
		});
	}
  };
  
  exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['r'],
	permLevel: 3
  };
  
  exports.help = {
	name: 'reload',
	description: 'Recharge le fichier de commande, si il a été modifié ou mis-à-jour.',
	usage: 'reload <nom de la commande>'
  };