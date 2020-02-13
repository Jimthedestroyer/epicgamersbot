const Discord = require('discord.js');
const ms = require('ms');
const bot = new Discord.Client();
const commandsDoc = 'https://docs.google.com/document/d/1Wq-b90YR_QxgH95cIAVK-906YJyfxXc-kZ8c6skvGv0/edit?usp=sharing';
const token = "Njc2OTI2NTAwMDkxNDYxNjg0.XkMy-g.6Goqnd_7zfAUDCw7MA513OhaFs8";

const prefix = '!';

bot.login(token); 

var emojiArray = ['🐒💨🙊','👅🦶💦','💩🏊💩']

function randomNumber(){
    return Math.floor(Math.random() * Math.floor(3));
}

console.log('random number is ' + randomNumber());


bot.on('ready', () =>{
    console.log('Bot Online');
})

bot.on('message', message=>{

    let args = message.content.substring(prefix.length).split(' ')

    switch(args[0]){
        case 'bruh':
            message.channel.sendMessage('now thats a bruh moment right there');
            break; 
        case 'botinvite': 
            message.channel.sendMessage('https://discordapp.com/oauth2/authorize?client_id=676926500091461684&scope=bot&permissions=2146958847');
            break;
        case 'kc':
            message.channel.sendMessage('https://cdn.discordapp.com/attachments/650106091975344129/676938793730703379/image0.png');
            break;
        case 'commands':
            message.channel.sendMessage(commandsDoc);
            break;
        case 'funnyemoji':
            if(randomNumber() === 2){
                message.channel.sendMessage(emojiArray[2]);
            } else if(randomNumber() === 1){
                message.channel.sendMessage(emojiArray[1]);
            } else{
                message.channel.sendMessage(emojiArray[0]);
            } break;
        case 'poopy':
            message.channel.sendMessage(':poop:');
            break;
        case 'givegold':
            message.channel.sendMessage('<:Upvote:606369919654690826>' + ' ' + ' ' + '<:gold:649785421009780736>');
            break;
    }
})
