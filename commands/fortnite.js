const Discord = require("discord.js")
const keys = require("../botconfig.json")
const Client = require('fortnite');
const fortnite = new Client(keys.fortnite);

module.exports.run = async (bot, message, args) => {
    await message.delete();
    if(message.author.id != "500447926313549825") return;
    let username = args[0];
    let platform = args[1] || 'pc';

    if(!username) return message.reply("Please provide a username.")

    let data = fortnite.user(username, platform [pc, xbl, psn]).then(console.log);
    fortnite.store().then(console.log);
    fortnite.challenges().then(console.log);



}

module.exports.help = {
    name: "fortnite"
}
