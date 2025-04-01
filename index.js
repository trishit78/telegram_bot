const {Telegraf} = require('telegraf');
const axios= require('axios');
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);

const iterativeFunction = function (sorted_arr, target) {
    let start = 0,
       end = sorted_arr.length - 1;
    while (start <= end) {
       let mid = Math.floor((start + end) / 2);
       if (sorted_arr[mid] == target) return true;
       else if (sorted_arr[mid] < target) start = mid + 1;
       else end = mid - 1;
    }
    return false;
 };

try {
    bot.start((ctx) => ctx.reply('welcome to tb bot'));
    bot.command('binarysearch',(ctx)=> ctx.reply(iterativeFunction));
    bot.command('binarytree', async(ctx) =>{
        const response = await axios.get('https://gist.githubusercontent.com/benlesh/9128359/raw/88f72369f003f49f013931b3fcc117e19d5b9e1e/BinaryTree.js');
        ctx.reply(response.data);
    })

    bot.on('sticker',(ctx)=> ctx.reply('❤️'));

    bot.on('text',(ctx)=>ctx.reply('I dont understand this message'));

    bot.on('text',(ctx)=>{
        console.log(ctx.update.message);
        if(ctx.update.message.text == 'I love you'){
            ctx.reply("love you too");
        }else{
            ctx.reply("i didnt get it");
        }
    })

   

    bot.launch();
} catch (error) {
    console.log(error);
}