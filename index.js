const Discord = require("discord.js");
const bot = new Discord.Client();

const token = "NzE3ODIwOTU1ODEyMDM2NjQw.Xtf5RQ.AELo9IZib4k2KFxxpZExxNFlMhY";

const PREFIX = "/";

bot.on("ready", () =>{
    console.log(">> Linnex, Loaded. <<");
    bot.user.setActivity("linnex.club || /help");
})

bot.on("message", message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case "ip":
            message.channel.send("> **IP:** `Linnex.club`");
            console.log("Hey! Someone executed the /ip command!");
        break;
    }
})

bot.on("message", message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case "help":
            message.channel.send("> ‣ **Help** \n > _ _ \n > **/ip** \n > **/help** \n > **/apply** \n > _ _");
        break;
    }
})

bot.on("message", message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case "apply":
            message.channel.send("Sent you a msg in dms. If you have dms off, you'll need to enable them.");
            message.author.send("Staff applications guidelines URL: https://docs.google.com/document/d/16n0oGAoVG5p_By4Sfmyjf97HgW6rRwuzIsMY4BpVw-E/edit?usp=sharing \n - YouTuber Apps URL: https://docs.google.com/forms/d/e/1FAIpQLSfwCxUJIPMeKJKtDCO8bnOgIWy_wB_QbHecuYE7jbXQ16pAnQ/viewform \n - Staff apps URL: https://docs.google.com/forms/d/e/1FAIpQLSfv0aTscDr7WCIO8BpZhNqsS7XnBjtU9LgRE9S5yG52IORl_A/viewform?usp=sf_link \n - Ban appeals: https://forms.gle/kShUxptQ4UZTLd4m7 \n - Builder Apps URL: https://docs.google.com/forms/d/e/1FAIpQLSeAD7Fo09n-fw4gCJneMMfrzZDlqzK83cZbCb256JxsGyMI8g/viewform");
        break;
    }
})

bot.on('message', function(message){
    if(message.content == "hi"){
        message.channel.send("Hey there!");
    }
})

bot.on('message', function(message){
    if(message.content == "hello"){
        message.channel.send("Hey there!");
    }
})

bot.on('message', function(message){
    if(message.content == "hi"){
        message.channel.send("Hey there!");
    }
})

bot.on('message', function(message){
    if(message.content == "whats the ip"){
        message.channel.send("> **IP:** `Linnex.club`");
    }
})


bot.login(token);