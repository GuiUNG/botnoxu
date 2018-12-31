exports.run = (client,message,args)=>{
    var razão = args.slice(1).join(" ")

    var usuario = message.mentions.users.first();
    if(!message.guild.member(message.author.id).hasPermissions("BAN_MEMBERS")) return message.reply("você não tem permissão de usar esse comando")
    if(message.mentions.users.size < 1) return message.reply("você não mencinou ninguém")
    if(!message.guild.member(usuario).bannable) return message.reply("eu não posso banir essa pessoa")
    if(razão.length < 1) return message.reply("você não colocou uma razão")

   var discord = require ('discord.js')

   var embed = new discord.RichEmbed()
   .setTitle("Usuário banido do server")
   .setImage ("https://cdn.discordapp.com/attachments/525115872390676509/527690589290889236/1fe.gif")
   .setColor("#6A5ACD")
   .addField("Usuário Banido:",usuario.username)
   .setFooter('Banido Por: ' + message.author.tag,message.author.avatarURL)
   .addField("Razão:", razão);

   message.channel.send(embed)
}


module.exports.config = {
name: "ban",
aliases: ["massdm", "dm", "mass", "anuncioall"]
}