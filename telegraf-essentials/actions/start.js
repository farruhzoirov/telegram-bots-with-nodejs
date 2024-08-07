import  bot from '../core/bot.js';

bot.start(async ctx => {
  await ctx.replyWithHTML('<strong>Welcome to amazing bot!</strong>')
});
