exports.run = (client, message) => {
	message.channel.send({embed: {
    color: 3447003,
    author: {
      name: "Erohis",
      icon_url: "https://i.imgur.com/8JG2C44.jpg"
    },
    title: "Informations",
    description: "Toutes les informations techniques sur le bot sont listées ici",
    fields: [{
        name: "Création",
        value: "Ce bot a été créé par moi :dabpenguinemoji:, c'est le tout premier que je fais donc soyez indulgent (づ｡◕‿‿◕｡)づ.\nDernière mise à jour : 11/05/2018"
      },
      {
        name: "Librairie",
        value: "J'ai utilisé la librairie [discord.js](https://discord.js.org) qui regorge de fonctionnalités et de documentation.\nDe plus, sur demande, je peux fournir les fichiers sources si vous le souhaitez si ça peut aider dans vos projets personnels sur Node.js !"
      },
      {
        name: "Suggestions",
        value: "N'hésitez pas à me faire des suggestions pour améliorer le bot en m'envoyant un message privé !"
      }
    ],
    timestamp: new Date(),
    footer: {
        icon_url: "https://i.imgur.com/8JG2C44.jpg",
        text: "© PandaBOT"
    }
  }
});
};

  exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
  };
  
  exports.help = {
	name: 'infos',
	description: 'Affiche des informations techniques supplémentaires sur le bot',
	usage: 'infos'
	};