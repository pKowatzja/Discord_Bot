
const gif = require("./commands/gif");
const hi = require("./commands/hi");

const commands = {
    hi,
    gif
};

// export default async function() {}
module.exports = async function (msg) {
    if (msg.author.bot) return; //only answering humans
    if (msg.channel.id == '808414890272096311') { //just this channel
        
        let tokens = msg.content.split(' ');
        let command = tokens.shift(); //for example !gif
        if (command.charAt(0) === "!") { //! at first? valid command?
            command = command.substring(1); //only command, e.g. gif
            commands[command](msg, tokens);
        }
    }
}