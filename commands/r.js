const Discord = require("discord.js");
var moment = require('moment');
moment.locale('pt-BR');

exports.run = (client,message,args)=>{
    if(!args || args.size < 1) return message.reply("Forneça o nome de um comando para recarregar");
    // the path is relative to the *current folder*, so just ./filename.js
    delete require.cache[require.resolve(`./${args[0]}.js`)];

const embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
   .setColor(message.member.highestRole.color)
   .addField(message.author.username, `<a:sucesso:529073005960232962> O comando **${args[0]}** foi recarregado com sucesso!`)
   setTimeout(() => {message.delete()}, 5000)

  

   message.channel.send({embed});
  };

module.exports.config = {
name: "functions",
aliases: ["massdm", "dm", "mass", "anuncioall"]
}