const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("DISCORD BOT DEVLOPER")

client.user.setActivity(`................`, {
type: "idle",
url: "https://www.twitch.tv/ronak83s"})
    .then(presence => console.log(`RONAK  ${presence.game ? presence.game.none : 'DISCORD BOT DEVLOPER'}`))
    .catch(console.error);
  let channel = client.channels.get('vc id........'); 
channel.join()
});

client.login('Nzk4NDI1Njc3MzkyNzczMTcw.X_02CA.Vc7WdNlMzmSnzoAmfoyZZs_QdI8'); 
