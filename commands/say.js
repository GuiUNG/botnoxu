exports.run = (client,message,args) => {

    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{})
    message.channel.send(sayMessage)
    .setColor("#000000")
    message.channel.send(embed)
    message.channel.send(sayMessage)

}

