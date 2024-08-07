import bot from '../core/bot.js';
import {Markup} from "telegraf";

bot.command('inline', async ctx => {
  await ctx.telegram.sendMessage(
      ctx.from.id,
      "Testing URL buttons",
      {
        reply_markup: {
          inline_keyboard: [
            [ { text: "Button 1", callback_data: "btn-1" }, { text: "Button 2", callback_data: "btn-2" } ],
            [ { text: "Next", callback_data: "next" } ],
            [ { text: "Open in browser", url: "telegraf.js.org" } ]
          ]
        }
      }
  );
});

bot.action("btn-1", async ctx => {
  // await ctx.editMessageReplyMarkup({
  //   inline_keyboard: [
  //     [ { text: "Updated Button 1", callback_data: "btn-1" }, { text: "Button 2", callback_data: "btn-2" } ],
  //     [ { text: "Next", callback_data: "next" } ],
  //     [ { text: "Open in browser", url: "https://telegraf.js.org" } ]
  //   ]
  // });
  //
  // // Optionally, send a new message or update text
  await ctx.editMessageText('Button 1 text has been updated');
})