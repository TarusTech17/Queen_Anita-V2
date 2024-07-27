//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "254725505351";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "composing";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU9XNllYM0dXWGkvOHRKSTBvaFU2NitzeTQycXl6a1J1VWZZVUdBbTNIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiejdyV0VsZVRkZDNld0VIRGFBajBUQ1FBOHQ0eXlEOUwxWXJHd0xIdnEzRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXREpVZU1mS1hzaHBGV29TVFdnWk5Cd1JOWEYyN1NwWHFPS2xxZXhiOEdRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwWlVpZUxPUVVNZHVmMzNqMkEyODArekxIQ3BGRVNaRlU5ci9ib0c2YW5FPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFGcC95UGcyOVY0S3JKVnFqTTQzejE0dXZEcWJmOEhFZlNJa0JYWk5aa0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InkzWi8zdTh5RzFYSm54dGZuN1hid0JIaXFjQW5zVmVsWGo2eE9xWk91bU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUQ4TmJmWkpXeVMyVWxVeEhnVmROQVA5VGRML2dudyt6bnNXbzVqV2hHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQnpXNDQ5RTFGbm5iczBZTWc4VVdIRHI2dGxvaUVGa1hlRko2ZW5kNjBVOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJ0dC9qc0ErbXMxdHhTVG5QNHBSSE5IUW5tbFh0WTFlUVZ6K2pZNmZqVGpybG9iVHh0ZmxXcnRUNkJlQVNVT1JuWmhleWpaZnlxQnVZRDZocTJrU2l3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYsImFkdlNlY3JldEtleSI6IlVtaThybkN2Yk1RMmU0SFF4VlEzcDMrOHFYd2MxN2xPc3FPL0pXY3IwR0k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjROMlNhNnJ2VEFlVjBnTFI0VEhFdVEiLCJwaG9uZUlkIjoiNGQyODAyMzgtMzMzNC00ZWQ0LWJiMzgtZWY1OGZmY2E4MTE2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdOQ0RZWW56c25TU1hWa0pmREM1bWZJTE5Bdz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUVTY2UrOUoxSURrM0JvanNtT3lyZlp5eVJjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWlmajlVSEVPcXdrclVHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiREovOTgrK3l2Zjg3OFp6aXA1d0l4dEhFeGdpT21aWXFabDVQb0grbnFEcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiU3hhakZrWEFvMm5wVzZqY2tCZnpVck9EQjduZ2d1dDFsdkZoWncwdVBaeHlRODF4bXdndjMyUG1rNkxoRThUNm16S1dmRDFOVVVhRElUVzkyQ25IQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IlBGbXF5U0U1Z1AwSmZaM0NMd2pRbkRnT3JWMjRrVzV5cEJ5UDlhUUoycEVkbUFWYU03OEhCZVBVcjZ1QktXSnF1aEVyNUt5LzAwUVZkYU1TVUxxTWdRPT0ifSwibWUiOnsiaWQiOiIyNTQ3MjU1MDUzNTE6NjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTEVDSEVSTyBET1lFTiIsImxpZCI6Ijc5MDg3NzEyMzk5NTcxOjY3QGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MjU1MDUzNTE6NjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUXlmL2ZQdnNyMy9PL0djNHFlY0NNYlJ4TVlJanBtV0ttWmVUNkIvcDZnNyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0F3SURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMDYyOTY4LCJsYXN0UHJvcEhhc2giOiIyUnV0TjAiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUIvLyJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "LECHERO DOYEN",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
