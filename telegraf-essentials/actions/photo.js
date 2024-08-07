import  bot from '../core/bot.js';

bot.on('photo', async ctx => {
  const user = ctx.from.id;
  const photo = ctx.message.photo[1].file_id
  await ctx.telegram.sendPhoto(user, photo)
});