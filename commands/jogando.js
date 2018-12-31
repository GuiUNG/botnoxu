var discord = require('discord.js')
var embed = new discord.RichEmbed()


exports.run = (client,message,args)=>{
  client.user.setPresence({ game: { name: 'jogar.redenoxus.com.br', type: 0, url: 'https://www.twitch.tv/thebigfamilydc'} })
  var embed = new discord.RichEmbed()

  .setColor("#ADFF2F")
  .setDescription("Agora Eu Estou Jogando!<a:check:529165811542130688>")
  .setTitle("Mudança De Status!")
  message.channel.send(embed)
    .setColor("#ADFF2F")
    .setDescription("Agora Eu Estou Jogando!<a:sucesso:529073005960232962>")
    .setTitle("Mudança De Status!")
    .addBlankField()
    message.channel.send(embed)
  
  };

module.exports.config = {
name: "jogando",
aliases: ["massdm", "dm", "mass", "anuncioall"]
}