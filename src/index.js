require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder, Options } = require('discord.js');
const { Pagination } = require('pagination.djs');

// import {config} from 'dotenv';
// import {Client, IntentsBitField, EmbedBuilder, Options} from 'discord.js'
// import { pagination } from './pagination';

// const page = require('./pagination')

// config();

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

const names = [
    'hello',
    'world',
    'something',
    'chicha',
    'kya hua chicha',
    'are angrez',
    'packet'
]

const images = [
    'https://cdn-0.generatormix.com/images/thumbs/random-anime-character-generator.jpg',
    'https://fs-prod-cdn.nintendo-europe.com/media/images/06_screenshots/games_5/nintendo_switch_download_software_2/nswitchds_lostinrandom/NSwitchDS_LostInRandom_06.jpg',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    'https://pbs.twimg.com/media/D8Dp0c5WkAAkvME.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkeD-9PLmywAWfCrKybHmerjJkiYMWRnizOg&usqp=CAU',
    'https://www.majorgeeks.com/news/file/13592_going%20to%20work%20majorgeeks.jpg',
    'https://images2.fanpop.com/image/photos/8600000/random-animals-animals-8675984-377-442.jpg',
]

const staticImages = {

    lion: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlvbiUyMGhlYWR8ZW58MHx8MHx8&w=1000&q=80",
    blueWhale: "https://a-z-animals.com/media/2021/10/What-do-blue-whales-eat-header.jpg",
    naruto: "https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png/revision/latest/scale-to-width-down/1200?cb=20210223094656",
    tRex: "https://cdn.wallpapersafari.com/5/35/1yispm.jpg",
    morphius: "https://w0.peakpx.com/wallpaper/995/394/HD-wallpaper-the-sandman-dream.jpg"

}

client.on('ready', (c) => {
    console.log(`✅ your bot named ${c.user.tag} is ready`);
})

client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }

    if (message.content == "hello") {
        message.reply('Hi there, How can I help you ?');
    }
    else if (message.content == "say hello to nafe") {
        message.reply("Who is this nafe?, I don't know him sorry!")
    }
})

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;
    switch (interaction.commandName) {
        case 'random-name':
            let randomName = Math.floor(Math.random() * names.length)
            await interaction.reply(names[randomName])
            break;
        case 'random-image':
            let randomImage = Math.floor(Math.random() * images.length)
            const image_message = new EmbedBuilder()
                .setImage(images[randomImage])
                .setColor('Random')
            await interaction.reply({ embeds: [image_message] });
            break;
        case 'image-query':
            const image = interaction.options.get('get-image').value
            const embed = new EmbedBuilder()
                .setImage(staticImages[image])
            await interaction.reply({ embeds: [embed] });
            break;
        case 'enroll':
            const enroll = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('LORD MORPHEUS')
                // .setURL('https://discord.js.org/')
                .setAuthor({ name: 'Lord Morpheus', iconURL: 'https://w0.peakpx.com/wallpaper/995/394/HD-wallpaper-the-sandman-dream.jpg' })
                .setDescription('lorem3lj lsdjfn ajs jlasdj fl asmdlf asd jmflsad lfkasd; i jfi;ksad jf uh asdlkjf niasdj foksdifh nsad;kf sjk')
                .setThumbnail('https://w0.peakpx.com/wallpaper/995/394/HD-wallpaper-the-sandman-dream.jpg')
                .addFields(
                    { name: 'Regular field title', value: 'Some value here' },
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Inline field title', value: 'Some value here', inline: true },
                    { name: 'Inline field title', value: 'Some value here', inline: true },
                )
                .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
                .setImage('https://w0.peakpx.com/wallpaper/995/394/HD-wallpaper-the-sandman-dream.jpg')
                .setTimestamp()
                .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
            break;
        case "pagination":

            const embed1 = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('LORD Someone')
                // .setURL('https://discord.js.org/')
                .setAuthor({ name: 'Chicha Ki dukan', iconURL: 'https://w0.peakpx.com/wallpaper/995/394/HD-wallpaper-the-sandman-dream.jpg' })
                .setDescription('lorem3lj lsdjfn ajs jlasdj fl asmdlf asd jmflsad lfkasd; i jfi;ksad jf uh asdlkjf niasdj foksdifh nsad;kf sjk')
                .setThumbnail('https://w0.peakpx.com/wallpaper/995/394/HD-wallpaper-the-sandman-dream.jpg')
                .addFields(
                    { name: 'Regular field title', value: 'Some value here' },
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Inline field title', value: 'Some value here', inline: true },
                    { name: 'Inline field title', value: 'Some value here', inline: true },
                )
                .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
                .setImage('https://w0.peakpx.com/wallpaper/995/394/HD-wallpaper-the-sandman-dream.jpg')
                .setTimestamp()
                .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

            const embed2 = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('LORD MORPHEUS')
                // .setURL('https://discord.js.org/')
                .setAuthor({ name: 'Lord Morpheus', iconURL: 'https://w0.peakpx.com/wallpaper/995/394/HD-wallpaper-the-sandman-dream.jpg' })
                .setDescription('lorem3lj lsdjfn ajs jlasdj fl asmdlf asd jmflsad lfkasd; i jfi;ksad jf uh asdlkjf niasdj foksdifh nsad;kf sjk')
                .setThumbnail('https://w0.peakpx.com/wallpaper/995/394/HD-wallpaper-the-sandman-dream.jpg')
                .addFields(
                    { name: 'Regular field title', value: 'Some value here' },
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Inline field title', value: 'Some value here', inline: true },
                    { name: 'Inline field title', value: 'Some value here', inline: true },
                )
                .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
                .setImage('https://w0.peakpx.com/wallpaper/995/394/HD-wallpaper-the-sandman-dream.jpg')
                .setTimestamp()
                .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
            const arrayEmbeds = [
                embed1, embed2, embed1, embed2, embed1

            ]

            const descriptions = ['This is a description.', 'This is a second description.'];
const images = ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', 'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg'];
const pagination = new Pagination(interaction)
	.setDescriptions(descriptions)
	.setImages(images)
	.setFields([
		{
			name: 'First',
			value: 'First'
		},
		{
			name: 'Second',
			value: 'Second'
		},
		{
			name: 'Third',
			value: 'Third'
		}
	])
	.paginateFields(true);
await pagination.render();

        default:
            await interaction.reply("Please Check your command");
    }
});


client.login(process.env.TOKEN);