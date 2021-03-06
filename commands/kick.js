const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../util/caseNumber.js');
const {parseUser} = require('../util/parseUser.js');
const settings = require('../settings.json');
exports.run = async (client, message, args) => {
  const user = message.mentions.users.first();
  parseUser(message, user);
  const modlog = client.channels.find('name', 'mod-log');
  const caseNum = await caseNumber(client, modlog);
  if (!modlog) return message.reply('Je ne trouve pas de channel #mod-log');
  if (message.mentions.users.size < 1) return message.reply('Vous devez mentionner quelqu\'un pour l\'exclure.').catch(console.error);

  // message.guild.member(user).kick();

  const reason = args.splice(1, args.length).join(' ') || `En attente d'ajout. Utilisez ${settings.prefix}reason ${caseNum} <raison>.`;
  const embed = new RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setDescription(`**Action :** Exclusion\n**Utilisateur :** ${user.tag}\n**Modérateur :** ${message.author.tag}\n**Raison :** ${reason}`)
  .setFooter(`Affaire ${caseNum}`);
  return client.channels.get(modlog.id).send({embed});
};

exports.conf = {
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'Exclu(e) le/la joueur(se) mentionné(e).',
  usage: 'kick [@mention] [raison]'
};