// import {REST, Routes, ApplicationCommandOptionType} from 'discord.js'
// import {config} from 'dotenv'
require('dotenv').config();
const {REST, Routes, ApplicationCommandOptionType} = require('discord.js');

// config();

const commands = [
//   {
//   name: 'add',
//   description: 'Adds Two Numbers',
//   options: [
//     {
//         name: 'first-number',
//         description: 'the first number to add',
//         type: ApplicationCommandOptionType.Number,
//         required: true,

//     },
//     {
//         name: 'second-number',
//         description: 'the second number to add',
//         type: ApplicationCommandOptionType.Number,
//         required: true,

//     },
//   ]
// },
  {
    name : 'random-name',
    description : 'Gives a random Name'
  },
  {
    name : 'random-image',
    description : 'Gives a random image'
  },
  {
    name: 'image-query',
    description: "Gives image according to query",
    options: [
      {
          name: 'get-image',
          description: 'get your image',
          type: ApplicationCommandOptionType.String,
          required: true,
          choices: [
            {
              name: 'Lion',
              value: 'lion'
            },
            {
              name: 'BlueWhale',
              value: 'blueWhale'
            },
            {
              name: 'Naruto',
              value: 'naruto'
            },
            {
              name: 'T-Rex',
              value: 'tRex'
            },
            {
              name: 'Morphius',
              value: 'morphius'
            },
          ],
      }
    ],
  },
  {
    name: 'enroll',
    description: "Log in with the game"
  },
  {
    name : 'pagination',
    description : 'testing Pagination'
  },

]; 

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();