var discord = require('discord.js')
var embed = new discord.RichEmbed()


exports.run = (client,message,args)=>{
  client.user.setPresence({ game: { name: 'Rede Noxus', type: 3, url: 'https://www.twitch.tv/thebigfamilydc'} })
  var embed = new discord.RichEmbed()

  .setColor("#ADFF2F")
  .setDescription("Agora Eu Estou Assistindo!<a:check:529165811542130688>")
  .setTitle("Mudança De Status!")
  message.channel.send(embed)
    .setColor("#ADFF2F")
    .setDescription("Agora Eu Estou Assistindo!<a:sucesso:529151397204066324>")
    .setTitle("Mudança De Status!")
    .addBlankField()
    message.channel.send(embed)
  
  };

module.exports.config = {
name: "assistindo",
aliases: ["massdm", "dm", "mass", "anuncioall"]
}