const { Telegraf } = require('telegraf')
const bot = new Telegraf('1687130115:AAGqVEm5aDz2cGeAoRIjggk7Nat5q_g3zfs')
console.log("HELLO")
bot.launch()
module.exports = bot