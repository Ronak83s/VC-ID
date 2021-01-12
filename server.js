const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("DISCORD BOT DEVLOPER")

client.user.setActivity(`ok.....`, {
type: "idle..........",
url: "https://www.youtube.com/channel/UCF8EBnJskNhd-JON7D4CgpA"})
    .then(presence => console.log(`RONAK  ${presence.game ? presence.game.none : 'DISCORD BOT DEVLOPER'}`))
    .catch(console.error);
  let channel = client.channels.get('vc id.......'); 
channel.join()
});

client.login('........'); 
