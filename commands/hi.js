const replies = [
    'Hallo Blad!',
    'Sie haben Post!',
    'Du kannst nicht lesen?'
]

// export default function() {}
module.exports = function (msg, args) { // only this function will be exported
    const index = Math.floor(Math.random() * replies.length);
    msg.channel.send(replies[index]);
}
