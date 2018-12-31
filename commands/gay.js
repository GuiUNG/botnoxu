var discord = require('discord.js')
var embed = new discord.RichEmbed()

exports.run = (client,message,args)=>{
    let user = message.mentions.users.first();
    if(message.mentions.users.size < 1) return message.reply("você não mencioniou ninguém")

    var discord = require('discord.js')

    var embed = new discord.RichEmbed()

     .setAuthor(" O Gay Do Servidor É O "+ user.username +" ")
     .setDescription("<a:gay:529320921530368019>")
     .setImage("https://media1.tenor.com/images/5d2600c9d0059e43f080e4c22bf07537/tenor.gif?itemid=10567905")
     .setColor("#00FF00")
     .setTimestamp()
     .setFooter('Solicitado Por: ' + message.author.tag,message.author.avatarURL)
     message.channel.send(embed)
    }
    
    
    module.exports.config = {
    name: "embed",
    aliases: ["massdm", "dm", "mass", "anuncioall"]
    }