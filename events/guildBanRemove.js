const Discord = require('discord.js');

module.exports = (guild, user) => {

  client.channels.get('245491978601627648').sendMessage(`Le bannissement de ${user.tag} a été révoqué !`);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action :** Révocation d\'un ban\n**Utilisateur :** ${user.tag}\n**Modérateur :** ${guild.client.unbanAuth.tag}\n**Raison :** ${guild.client.unbanReason}`);
  return guild.channels.get(guild.channels.find('name', 'mod-log').id).send({embed});

};