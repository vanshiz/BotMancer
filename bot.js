import { Client, Events, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';
import * as greet from './commands/hello.js';
config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

function readyDiscord() {
    console.log('Hello Buddy ' + client.user.tag);
}


async function handleInteraction(interaction) {

    console.log('Received Interaction:', interaction);

    if (!interaction.isCommand()) return;

   
    if (interaction.commandName === 'greet') {
        try {
            
            console.log('Executing /greet command for user:', interaction.user.tag);
            await greet.execute(interaction);
            console.log('/greet command executed successfully.');
        } catch (error) {
            console.error('Error executing /greet command:', error);
        }
    }
}

client.once(Events.ClientReady, readyDiscord);

client.on(Events.InteractionCreate, handleInteraction);

client.login(process.env.TOKEN);
