console.log('Beep beep!');
// dotenv for .env
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

botToken = process.env.BOT_TOKEN;
client.login(botToken);

//function readyDiscord() {
//    console.log('Ready!');
//}
client.on('ready', () => {
    console.log('Logged in!');
});

const commandHandler = require("./commands");

client.on("message", commandHandler);