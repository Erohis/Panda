module.exports = member => {
    let guild = member.guild;
    client.channels.get('245491978601627648').sendMessage(`Une minute de silence pour ${member.user.username}, tu vas nous manquer :sob: !`);
  };