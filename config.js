/*
 * Base By Lil Gaga 
 * Created On 03/10/2025
 * Contact Me on tg t.me/Xaphnathpanior 
*/

const chalk = require("chalk")
const fs = require("fs")
require('dotenv').config(); 

//================= { SETTINGS } =================\\
global.owner = process.env.OWNER_NUMBER || "263716857999"; // 263716857999 
global.botimg = process.env.BOT_IMG || "https://files.catbox.moe/hvljlp.jpg"
global.previewLink = process.env.PREVIEW_LINK || ""
global.sudo = process.env.SUDO  || " ";
global.ownername = process.env.OWNER_NAME || "Lil Gaga";
global.botname = process.env.BOT_NAME || "Gaga09XMD"
global.onlypc = process.env.ONLYPC_MSG  || "Sorry buddy the bot won't work directly in group chat to reduce spam use in private chat";
global.onlygc = process.env.ONLYGC_MSG  || "Sorry buddy the bot won't work directly in private chat to reduce spam use in group";
global.session = process.env.SESSION_ID || "Akane-Md_d334587fa61c07a307387a75ee2960d8"
global.timezone = process.env.TIME_ZONE || "Africa/Harare";


//======= Don't touch =======\\
global.msg = {
    succes: 'Success',
    owner: 'This feature could be used by owner only',
	admin: 'This feature could be used by group admin only',
	BotAdmin: 'This feature could be used when the bot is an admin only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'processing...',
    linkm: 'Where is the link?',
    ban: 'Sorry you have been banned 🚶from using command contact owner to unban ❌'
    }
 // cpanel Richie
 global.egg = "15"
global.nestid = "5" // nest ID
global.loc = "1"
global.domain = "add_domaim_url"
global.apikey = "add_api_key"
global.capikey = "add_capikey"
global.creatorName = "LilGaga"

//==========================
    
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(`Update ${__filename}`);
delete require.cache[file];
require(file);
});
