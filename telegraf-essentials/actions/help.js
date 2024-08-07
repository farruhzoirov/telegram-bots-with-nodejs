import  bot from '../core/bot.js';

bot.help(async ctx => {
  const helperText = `<b>Bizning botimizda bajarishingiz mumkin bo'lgan komandalar: </b> \n` +
      `/start - <code>Botni ishga tushiruvchi kommanda</code> \n` +
      `Author: <a href="https://t.me/Farruh_Zoirov">Farruh Zoirov</a>`
  await ctx.replyWithHTML(helperText)
});