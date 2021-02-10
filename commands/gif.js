const fetch = require('node-fetch');

// export default async function() {}
module.exports = async function(msg, args) {
    let keywords = 'random';
        if (args.length > 0) {
            // !gif papa platte --> [gif, papa, platte] --> "papa platte"
            keywords = args.join(" ");
        }

        msg.channel.send
        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENOR_KEY}&contentfilter=off`; //e.g. codingtrain
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        msg.channel.send(json.results[index].url);
        msg.channel.send("GIF from Tenor: " + keywords);
}