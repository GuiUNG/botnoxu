const Discord = require("discord.js");

exports.run = (client,message,args) => {

    let reason = args.slice(0).join(' ');

  if (reason.length < 1) return message.reply('--anuncioall');
  message.channel.send( new Discord.RichEmbed()
  .setColor("#00ff00")
  .setTimestamp()
  .setTitle(' <a:loading:529165888172326953> | Enviando Mensagens Para Todos Do Servidor , Aguarde.')).then(m => m.delete(9000))
      var embed = new Discord.RichEmbed()
        .setTitle('<a:sino:528238613943549954> | Anúncio')
        .setDescription(args.join(" "))
        .setColor("#a32aff")
        .setFooter('Anunciado por: ' + message.author.tag,message.author.avatarURL)
        message.delete().catch(O_o=>{}); 
        message.guild.members.map(users=>users.send(embed));
};

module.exports.config = {
name: "anuncioall",
aliases: ["massdm", "dm", "mass", "anuncioall"]
}