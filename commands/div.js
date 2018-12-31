const Discord = require("discord.js");
module.exports.run = async (client, message) => {
    var user = message.mentions.users.first();

    if (!user) user = message.author;

    var targetInvites = await message.guild.fetchInvites();

    var invitesUses = 0;

    targetInvites.forEach(invite => {
        if (invite.inviter.id === user.id) {
            invitesUses += invite.uses;
        }
    });

    var embed = new Discord.RichEmbed()
    .setThumbnail(user.displayAvatarURL)
    .addField("**<:especial:529320881894326312> Membros Recrutados:**", `\`\`\`md\n# ${invitesUses} Membros\`\`\``)
    .setColor("#00ff00")
    .setFooter(`${user.tag}`)
    .setTimestamp()
    .setFooter('Solicitado Por: ' + message.author.tag,message.author.avatarURL)
    message.channel.send(embed);
};

module.exports.config = {
    name: "div"
};