var discord = require('discord.js')

exports.run = (client,message,args)=>{
    var sugest = args.slice(0).join(" ")
    if(!sugest) return message.reply("Escreva sua sugestão")
        client.guilds.get("529024190511185921").channels.get("529074603595792385").send("<a:sino:529091697746116629>  Sugestão <a:sino:529091697746116629> \n \n"  + sugest + "\n \n Sugestão Enviada por <@" + message.author.id + "> ou " + message.author.tag + "")
        var embed = new discord.RichEmbed()
        .setColor("#000000")
        .setFooter('Sugestão Feita Por: ' + message.author.tag,message.author.avatarURL)
        message.channel.send(" <:checkmark:529093028774805520> | Sua Sugestão Foi Enviada Aos Administradores Do Servidor!")

        message.channel.send(embed)

}
