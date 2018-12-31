const Discord = require("discord.js");
const fs = require("fs")
exports.run = (client, message, args) => {
	let argsJunto = message.content.split(" ").slice(1).join(' ')
	if(message.author.id === '441457060555784193') {
    if(argsJunto.length < 1) {
			let embed = new Discord.RichEmbed()
      .setColor('#eb1818')	
    	message.channel.sendMessage(`<a:loading:529165888172326953> | Diga um comando para ser resetado.`); 
    } else {
			delete require.cache[require.resolve(`./${args[0]}.js`)];
			message.channel.sendMessage('<a:check:529165811542130688> | O comando `' + argsJunto + '` foi resetado.');
    }
  // the path is relative to the *current folder*, so just ./filename.js
} else {
  	message.channel.sendMessage('<:vpRedTick:257437215615877129> | Você não tem permissão para executar este comando.')
  }
}