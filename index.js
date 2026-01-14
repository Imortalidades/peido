const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('ready', () => {
    console.log(`Botino onilaine como ${client.user.tag}`);
});

client.on´('messageCreate', async message => {
    if (message.author.bot) return;

    if (message.content === 'aping') {
        const ping = client.ws.ping;
        message.reply(`pong! Meu ping é **${ping}ms**`);
    }
});

client.login('MTQ2MDkzNjE5Mjc2ODg2ODQzNg.GQVUzf.NnA4nCUwoNRb_SCPoXKkg_4NtbX5Wjpef0PLU');
