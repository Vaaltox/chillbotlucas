const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () =>{
    console.log('Ready!')
}),

// <-- Préfix -->

//*-*
// <-- Commandes -->

client.on('message', (message) => {
    if (message.content === '!badgirl'){
        message.channel.send("<@692714438590988328> Elle la avec sa grosse tête ! tu l'as touche tes ban !!!")
    }

});

// *-*
// <-- Réglement -->




// *-*
// <-- Reaction -->

client.on("messageReactionAdd", reaction, member => {
    
})


// *-*
// <-- Clear -->

client.on("message", message => {

    if(message.content.startsWith("!clear")){
    message.delete();
        if(message.member.hasPermission('MANAGE_MESSAGES')){
 
           let args = message.content.trim().split(/ +/g);
           
           if(args[1]){
               if(!isNaN(args[01]) && args[1] >= 1 && args[1] <= 100){

                  message.channel.bulkDelete(args[1])
     
               }
           }
        }
    }
})
// *-*

// <-- Token -->

client.login('Nzc5NjM0OTkxNjU5MzUyMDY0.X7jZqg.-TuNDPWLiEKbt7gJ0NBd89B8Tbk');

// *-*
