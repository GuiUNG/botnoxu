const Discord = module.require('discord.js');
const sa = module.require('superagent');

exports.run = async  = (client,message,args)=>{
  let {body} = await sa.get('https://random.cat/meow');

  // And now to make it shorter we can send the image in embed!

  let embed = new Discord.MessageEmbed()
    .setColor('#f4df42')
    .setTitle('Aqui está a sua imagem de gato solicitada!')
    .setImage(body.file); // Here we can learn new function for embeds, this function attaches file/image to the embed, in this case it will get file element from body JSON structure

  // And now we can finally send it :)
  return message.channel.send(embed);
}

module.exports.config = {
name: "gato",
aliases: ["massdm", "dm", "mass", "anuncioall"]
}