const Discord = require('discord.js')
const client = new Discord.Client();
const token = 'NzE0MTk2MTM2NTU4MTk4ODE2.XsrJfg.Gy9NHhUIEmkG_HDI9PZp60zaNog';

client.on('ready', () => {
	console.log('I am ready!');
  });
  client.on('message', message => {
	if (message.author.id === '457241709982646283') {
	  message.reply('hey stupid!');
	}
  });
  
  client.login(token);