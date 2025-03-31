const {Telegraf} = require('telegraf');
require('dotenv').process();
const bot = new Telegraf(process.env.BOT_TOKEN);