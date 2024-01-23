
import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('greet')
  .setDescription('This is a message');

export async function execute(interaction) {
  console.log('Executing greet command for user:', interaction.user.tag);

  try {
    await interaction.reply('Have a nice day ahead. You are doing great!');
    console.log('Greet command executed successfully.');
  } catch (error) {
    console.error('Error executing greet command:', error);
  }
}
