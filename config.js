/**
   * Created By Mouad.
   * Contact Me on wa.me/212695290310
   * Follow https://github.com/crisiano800
**/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'bee20bed87',
}
//======================================//

global.wm = 'ᴍʏ ɪɴsᴛᴀɢʀᴀᴍ :  ᴍᴏᴜᴜᴀᴅ__ᴇʟᴋ'
global.ucpn = ''

//================= Url =================//
global.linkgc = 'https://chat.whatsapp.com/K0wB3UDCNcj5sHEvdUc5ug'
global.linkig = 'https://instagram.com/mouuad__elk'
global.linkyt = 'https://youtu.be/RnpyRe_7jZA'
global.linkfb = 'https://www.facebook.com/cassamouad'
global.web = 'https://raselcomel.github.io'
global.web1 = 'https://anu.rasell.repl.co'
global.linkgh = 'https://github.com/cristiano800'

global.session = process.env.SESSION_ID|| ''
global.titlink = 'Folllow me on Instagram'
global.bodlink = 'mouuad__elk'
// Other
global.watermark = '«ᴍᴏᴜᴀᴅ ᴇʟ»🇲🇦'
global.owner = ['212695290310']
global.premium = ['212695290310']
global.packname = 'ᴍᴏᴜᴀᴅ ᴇʟ'
global.author = '𝐿𝑜𝑟𝑑-𝑜𝑓𝑓𝑖𝑐𝑖𝑎𝑙'
global.sessionName = 'ᴍᴏᴜᴀᴅ'
global.prefa = ['','!','.','🐦',',','*']
global.sp = '❄︎'
global.mess = {
    success: '𝑺𝒖𝒄𝒄𝒆𝒔𝒔✔︎',
    admin: 'Group Admin Special Features!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'Bot Owner Special Features',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'Bot Number Users Special Feature',
    wait: 'Loading...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/lord.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
