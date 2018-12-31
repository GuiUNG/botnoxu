var discord = require('discord.js')
var embed = new discord.RichEmbed()


exports.run = (client,message,args)=>{
  client.user.setPresence({ game: { name: 'Rede Noxus', type: 2, url: 'https://www.twitch.tv/thebigfamilydc'} })
  var embed = new discord.RichEmbed()

  .setColor("#ADFF2F")
  .setDescription("Agora Eu Estou Ouvindo!<a:check:529165811542130688>")
  .setTitle("Mudança De Status!")
  message.channel.send(embed)
    .setColor("#ADFF2F")
    .setDescription("Agora Eu Estou Ouvindo!<a:sucesso:529073005960232962>")
    .setTitle("Mudança De Status!")
    message.channel.send(embed)
  
  };

module.exports.config = {
name: "ouvindo",
aliases: ["massdm", "dm", "mass", "anuncioall"]
}