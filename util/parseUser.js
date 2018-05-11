exports.parseUser = (message, user) => {
    const member = message.guild.member(user) || null;
    if (user.id === message.author.id) {
      return message.channel.send('Vous ne pouvez pas le faire à vous même ! Qu\'avez vous essayer de faire ?');
    } else if (member) {
      if (member.highestRole.position >= message.member.highestRole.position) return message.channel.send('L\'utilisateur mentionné possède un rang supérieur ou égale au votre.');
    }
    return user;
  };