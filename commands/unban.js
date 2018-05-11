exports.run = (client, message, args) => {
    const reason = args.slice(1).join(' ');
    client.unbanReason = reason;
    client.unbanAuth = message.author;
    const user = args[0];
    const modlog = client.channels.find('name', 'mod-log');
    if (!modlog) return message.reply('Je ne trouve pas de channel #mod-log');
    if (reason.length < 1) return message.reply('Vous devez fournir une raison pour la révocation.');
    if (!user) return message.reply('Vous devez fournir une mention complète, comme l\'ID d\'un joueur.').catch(console.error);
    message.guild.unban(user);
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
  };
  
  exports.help = {
    name: 'unban',
    description: 'Révoque le bannissement d\'un/une joueur(se) mentionné(e).',
    usage: 'unban [@mention] [raison]'
  };