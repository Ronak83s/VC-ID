const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("DISCORD BOT DEVLOPER")

client.user.setActivity(``, {
type: "",
url: "https://www.twitch.tv/ronak83s"})
    .then(presence => console.log(`RONAK  ${presence.game ? presence.game.none : 'DISCORD BOT DEVLOPER'}`))
    .catch(console.error);
  let channel = client.channels.get('VC ID'); 
channel.join()
});

client.login('mfa.MI_CqSJx79NUk12idI6CGVFTFrFq5colgs9ZzBgGDOvXu_JReDW2TTSReFDjh0ivBERe3kIxdq947xMNJL6k');
