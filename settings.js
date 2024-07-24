


const fs = require('fs');  //----- module----//

//checking if config.env exist otherwise settings.js will be used
//////////////////////////////////////////////////////////////
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
/////////////////////----END---///////////////////////////////




//////////////////////////////////////////////////
/////----------------Global---------------//////
/////////////////////////////////////////////////

global.thumb = fs.readFileSync('./lib/bugs/XByte.png') //Don't change
//////////////////////////////////////////////////////////
const BOTNAME = 'X - B Y T E'; //BOT name
//////////////////////////////////////////////////////////
const FOOTERNAME = '*Powered by TalkDrove*'; //Footer text











//----------------OWNER NUMBER------------------------------//
//////////////////////////////////////////////////////////////////

global.owner = process.env.OWNER_NUMBER  || '923072380380' ;  //put your number without +

/////////////////////////////////////////////////////////////////
//-------------------------------------------------------//




//////////////////////Global-end////////////////////////////////////////
module.exports = { //exporting modules to use in plugins









//----------------Session ID------------------------------//
//////////////////////////////////////////////////////////////////

SESSION_ID: process.env.SESSION_ID || 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE02dXV0NHl1amFOTlNPYVM2NE01K0dlOEpyY3hyc0loQkV2RlJhZGZYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHJLajFxK1R5OVhGNGY1VGdibFFuSmtJdWNDc3UyUFM2UFJiQ09sVmZpbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRmFOV05GajJ6dG9FblkrVElCRVVUcm9tUWY5alRZOEQvRS9LNWtwd244PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTXdCa0xLdGc2RUZMYldVdjBTMnZER2RGNnlQWGYxdEtTQ0xYNXZoQmdFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9MV0s0L3AyZWRrYVJQaHNLVHBnc2YrcTZTTDlwNFc2YnBsU2dnTWpTbUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InAwd1RrRTF5ZTBSYk9aMzFRL3lPODA4NWlESTBvZGNXUDFHL2xvcE50R3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUgwV2lBcHgzNlc2eXU2NnFYOFA3SDUxT2YvRjcvSFVDVG9NVmxiK1JIYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXg3Z0dKR1R0QnNBOE9CTmpzN284VEVrQzViMjI1b2Q5TzFyamc2L0owST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkV6OWdJZThHUERiZXZpN1dRUkRnSy9VSmkrbWx3cyswT1p0Z3V0bnQvaG16QzZ2SjJqM1h3bmhRTks3Ti9nUC83b2hxb0lGRG9PZUR3MloySDhwekJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTksImFkdlNlY3JldEtleSI6IkVneFJiKzJHNWh5NEgvS2dtdXRaZUFXdVpwUFBIY1RBSkVZL0l4eVBlcnc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTUyMzgwMzgwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjM4NzVGM0FGOTY2NjVGM0IyRkI2QzFCRDY2Q0RCMzZGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE4MTU0MDV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE1MjM4MDM4MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxNUUxODI4N0RBNzFBMThCMUZCMDVEQjc4QjVFNUZBRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxODE1NDA2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxNTIzODAzODBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNEU3NDY3NUMzOUE5N0Y5N0VBNDI4OTdCOTRCOUFGNjEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTgxNTQwOH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTUyMzgwMzgwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkI3QUM0NzZBREJDRUNEQTM1QzM3OEU4NzkxQTUwNTlCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE4MTU0MDh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImhxTlF0QzBoUnFlMFZXcV9LUERiVWciLCJwaG9uZUlkIjoiOTJiM2VkNDItNjdmYS00NDIwLWE3MDYtNTZlNzhkOTRmNmZkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im52L1ZQREp6d2tBUStwSUVsUzJ2U2xYRW14ND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtc0lSMmJPNUY2OTZwMTBUbkJDRGR4TEg0VUE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV1c5QlRMMjUiLCJtZSI6eyJpZCI6IjkyMzE1MjM4MDM4MDoxOUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDXG5cblxuXG5cblxuXG5ZXG5cblxuXG5cblxuXG5CXG5cblxuXG5cblxuRVxuXG5cblxuXG5cblxuXG5SIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPMmd1ZFVDRU4raWc3VUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI5dDlVU0NaeVkyam1vNmJZczF6VktCNytrVVVKLzdtVDBiVm1obnRRTXpVPSIsImFjY291bnRTaWduYXR1cmUiOiJES3MyRUkrTEV4bUdHM2swRklkSjRqakFRV1VoVmdoamNaeWk4Z21aMnptTlMrQitZYUxtNDhUK1B1VjNHek0zNlBFMlcvNStkYWh2d2lNVTVncVpCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOGlUcGMxOGVjaFdyMEJia3I5d1hQN2lNY1N5M0RicUNzYjd1ZFZ1dGs0Nkh6UkhNS3ZqMnJvRjdLU3dVRk9oTmZqUlplV0IzL3dOdWNmQytBMTA0Q0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxNTIzODAzODA6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmJmVkVnbWNtTm81cU9tMkxOYzFTZ2UvcEZGQ2YrNWs5RzFab1o3VURNMSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTgxNTQwNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKbFgifQ==', //Paste your session ID here

/////////////////////////////////////////////////////////////////
//-------------------------------------------------------//










//----------------BOT LOGO------------------------------//
//////////////////////////////////////////////////////////////////
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` , //BOT logo
/////////////////////////////////////////////////////////////////
//-------------------------------------------------------//





LANG:  process.env.LANG || 'EN' , //URDU OR EN
//////////////////////////////////////////////////////////

PREFIX: process.env.PREFIX || '.' , //PREFIX, LEAVE IT DEFAULT OTHERWISE BUTTON WILL NOT WORK
//////////////////////////////////////////////////////////

WORK_TYPE: process.env.WORK_TYPE || 'public' , //public or private
//////////////////////////////////////////////////////////

travaSend: process.env.TRAVA_SEND || '25' ,   //BUGS
//////////////////////////////////////////////////////////

COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' , //button or nonbutton
//////////////////////////////////////////////////////////

MODERATORS : process.env.MODERATORS === undefined ? "923072380380" : process.env.MODERATORS ,    
//////////////////////////////////////////////////////////

MAX_SIZE: process.env.MAX_SIZE === undefined ? '1536': process.env.MAX_SIZE, //Maximum size that bot can download a file   
//////////////////////////////////////////////////////////

OWNER_NAME: process.env.OWNER_NAME || 'Hamza' , //Your name
//////////////////////////////////////////////////////////

POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
//////////////////////////////////////////////////////////

FOOTER: process.env.FOOTER || '*Powered by TalkDrove*',    
//////////////////////////////////////////////////////////

ANTI_BAD: process.env.ANTI_BAD || false  ,  //true or false
//////////////////////////////////////////////////////////

AUTO_REACT:  process.env.AUTO_REACT  || false  ,     //true or false
//////////////////////////////////////////////////////////

AUTO_TYPING:  process.env.AUTO_TYPING  || false  , //true or false
//////////////////////////////////////////////////////////

AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,  //true or false
//////////////////////////////////////////////////////////

AUTO_READ:  process.env.AUTO_READ  || false  , //true or false
//////////////////////////////////////////////////////////

AUTO_BIO:  process.env.AUTO_BIO  || false  ,        //true or false
//////////////////////////////////////////////////////////

ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,  //true or false
//////////////////////////////////////////////////////////

HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,    
//////////////////////////////////////////////////////////

HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME,        
//////////////////////////////////////////////////////////

INBOX_USER: process.env.INBOX_USER === undefined ? '' : process.env.INBOX_USER,
//////////////////////////////////////////////////////////

BANNED_USER: process.env.BANNED_USER === undefined ? '' : process.env.BANNED_USER ,    //banned user number 
//////////////////////////////////////////////////////////

AI_MODE: process.env.AI_MODE === undefined ? 'true' : process.env.AI_MODE, //true or false
//////////////////////////////////////////////////////////

ANTI_LINK: process.env.ANTI_LINK || false  , //true or false
//////////////////////////////////////////////////////////

BOT_DETECT: process.env.BOT_DETECT === undefined ? 'false' : process.env.BOT_DETECT,  //true or false    
//////////////////////////////////////////////////////////

ANTI_BOT: process.env.ANTI_BOT || false  , //true or false
//////////////////////////////////////////////////////////

ANTI_CALL: process.env.ANTI_CALL || false  , //true or false
//////////////////////////////////////////////////////////

ALIVE: process.env.ALIVE || `default`,     
//////////////////////////////////////////////////////////

AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,     //true or false
//////////////////////////////////////////////////////////

AUTO_STICKER: process.env.AUTO_STICKER || false  , //true or false
//////////////////////////////////////////////////////////

WELCOME:  process.env.WELCOME  || false ,   //true or false
//////////////////////////////////////////////////////////

ANTI_DELETE : process.env.ANTI_DELETE || false , //true or false
//////////////////////////////////////////////////////////

DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO    
////////////---------X - B Y T E---------////////////////
};
