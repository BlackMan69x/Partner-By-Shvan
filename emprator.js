const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("/", (request, response) => {
  console.log(Date.now() + "hostemprator");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

client.login(process);

client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  ); ///By Emprator
  let statuses = [
    `Servers: ${client.guilds.size} | Users: ${client.users.size}`,
    `😍😍😍😍😍`,
    `  🔸EMPRATOR IS ONE🔸`
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "PLAYING",
      url: "http://www.twitch.tv/faith"
    });
  }, 3000);
});
/// REKLAM ///
client.on("ready", () => {
  var join = client.channels.get("776849362642272277"); /// ئاید ڤۆیس
  if (join) join.join();
});

client.on("message", message => {
  if (message.channel.type === "dm") {
    if (message.content.startsWith("https://discord.gg/")) {
      message.author.send(`>
https://discord.gg/ZFyjJ7aAdy`); /// لینکە سیرڤەرە خۆت

      client.channels.get("776849362642272277").send(
        `> Nerdra la layan <@${message.author.id}> 
${message.content}`
      );
    }
  }
});
