//////
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

client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = [
    `Servers: ${client.guilds.size} | Users: ${client.users.size}`,
    `PARTNER BOT `,
    `BY : SHVAN`
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "PLAYING",
      url: "http://www.twitch.tv/faith"
    });
  }, 3000);
});

// ======== { • REPLAY • }======== //

client.on("message", SHVAN => {
  if (SHVAN.content.startsWith("reklam")) {
    SHVAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");
    SHVAN.reply("**ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

////////

client.on("message", SHVAN => {
  if (SHVAN.content.startsWith("ریکلام")) {
    SHVAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");
    SHVAN.reply("**ریـکلاماکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

// ======== { • REKLAM • }======== //

client.on("ready", () => {
  var join = client.channels.get(""); /// ئاید ڤۆیس
  if (join) join.join();
});

client.on("message", shvan => {
  if (shvan.channel.type === "dm") {
    if (shvan.content.startsWith("https://discord.gg/")) {
      shvan.author.send(`> **تـۆش ریکلام بۆ ئـەم سێرڤـەرە بکە **  
https://discord.gg/9DBUNV7`); /// لینکە سیرڤەرە خۆت

      client.channels.get("").send(////ئایدی ژوری تێکست
 
        `> Nerdra la layan <@${shvan.author.id}> 
${shvan.content}`
      );
    }
  }
});

// ======== { • TOKENN • }======== //

client.login("لێرە تۆکین دانە");
////////////////