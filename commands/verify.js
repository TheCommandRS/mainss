const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!verify @Meet

  let tover = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tover) return message.reply("Couldn't find user.");
  let verrole = message.guild.roles.find(`name`, "Verified");
  //start of create role
  if(!verrole){
    try{
      verrole = await message.guild.createRole({
        name: "Verified",
        color: "#ffffff",
        permissions:[]
      })
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role

  await(tover.addRole(verrole.id));
  message.reply(`<@${tover.id}> has been verified`);

//end of module
}

module.exports.help = {
  name: "verify"
}
