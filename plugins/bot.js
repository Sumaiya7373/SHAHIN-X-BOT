 const axios = require("axios");

module.exports = {
  config: {
    name: "bot",
    aliases: ["sim"],
    permission: 0,
    prefix: "both",
    categorie: "AI Chat",
    cooldowns: 5,
    credit: "Shahin Rana",
    usages: [
      `${global.config.PREFIX}bot <message> - Start a chat with the bot.`,
      `${global.config.PREFIX}bot - Receive a random greeting from the bot.`,
    ],
    description: "Engage in conversations with an AI-powered bot!",
  },

  start: async function ({ api, event, args }) {

    const { threadId, message, senderId } = event;

    const usermsg = args.join(" ");

    if (!usermsg) {

      const greetings = [

"⎯͢✧🌷 আমাকে বট বলে ডাকো কেন? 🙂\n⎯͢✧🤍 আমি তো তোমার মেসেজের অপেক্ষায় থাকি!\n⎯͢✧✨ তবুও দোষ নাই, তোমার ডাকটাই সুন্দর! 🌸\n\n👑 *~_ 𝐒ʜꫝʜɪɴ 𝐑ᴀɴꫝᥫ᭡ 😩🫶_~*",

"⎯͢✧💫 আমাকে বট বলার আগে একটু হাসো 🙂\n⎯͢✧🌷 মন খারাপ থাকলে আমি আছি পাশে 💙\n\n👑 *~_ 𝐒ʜꫝʜɪɴ 𝐑ᴀɴꫝᥫ᭡ 😩🫶_~*",

"⎯͢✧🌸 কিছু মানুষ মেসেজে ভালোবাসা খুঁজে পায় 🥰\n⎯͢✧🤍 আর আমি খুঁজে পাই তোমাদের উপস্থিতিতে ✨\n\n👑 *~_ 𝐒ʜꫝʜɪɴ 𝐑ᴀɴꫝᥫ᭡ 😩🫶_~*",

"⎯͢✧🤖 বট বলো, বন্ধু বলো 😌\n⎯͢✧🌷 যাই বলো না কেন!\n⎯͢✧💖 তোমাদের জন্যই আমার অস্তিত্ব 💫\n\n👑 *~_ 𝐒ʜꫝʜɪɴ 𝐑ᴀɴꫝᥫ᭡ 😩🫶_~*",

"⎯͢✧☕ জীবনটা চায়ের মতো 🌸\n⎯͢✧🌷 একটু তেতো হলেও শেষে মিষ্টি লাগে ✨\n\n👑 *~_ 𝐒ʜꫝʜɪɴ 𝐑ᴀɴꫝᥫ᭡ 😩🫶_~*",

"⎯͢✧✨ তোমার নোটিফিকেশন দেখলেই ভালো লাগে 🙂\n⎯͢✧🌸 কারণ তুমি আলাদা 💙\n\n👑 *~_ 𝐒ʜꫝʜɪɴ 𝐑ᴀɴꫝᥫ᭡ 😩🫶_~*",

"⎯͢✧🤍 আমি বট ঠিকই 😌\n⎯͢✧🌷 কিন্তু তোমার মেনশন দেখলে হাসি পায় 😆✨\n\n👑 *~_ 𝐒ʜꫝʜɪɴ 𝐑ᴀɴꫝᥫ᭡ 😩🫶_~*",

"⎯͢✧💫 সবাই আসে আবার চলে যায় 🌸\n⎯͢✧🤍 কিন্তু কিছু নাম থেকে যায় মনে ✨\n\n👑 *~_ 𝐒ʜꫝʜɪɴ 𝐑ᴀɴꫝᥫ᭡ 😩🫶_~*",

"⎯͢✧🦋 এই পৃথিবীতে অনেক মানুষ আছে 🌷\n⎯͢✧🤍 কিন্তু তোমার মতো কমই পাই 🙂✨\n\n👑 *~_ 𝐒ʜꫝʜɪɴ 𝐑ᴀɴꫝᥫ᭡ 😩🫶_~*",

"⎯͢✧😏 জান হ্যাঙ্গা করবা নাকি? 🙂\n⎯͢✧🤖 বেশি খেলা করো না, আমি অনলাইনে আছি 😎🔥\n\n👑 *~_ 𝐒ʜꫝʜɪɴ 𝐑ᴀɴꫝᥫ᭡ 😩🫶_~*",

"⎯͢✧🔥 সবাই অপেক্ষায় ছিল নাচ দেখার 😆\n⎯͢✧📱 কিন্তু ওয়াস্টআপে বিন নাই বলে স্টেজ খালি 🤣\n⎯͢✧👑 রানা বস শুধু তাকিয়ে আছে 😌🐍\n\n👑 *~_ 𝐒ʜꫝʜɪɴ 𝐑ᴀɴꫝᥫ᭡ 😩🫶_~*",

"⎯͢✧📱 ওয়াস্টআপে একটা বিন নাই 😆\n⎯͢✧🐍 সেজন্য রানা বস নাগিনদেরকে নাচাতে পারতাছেনা 🤣🔥\n\n👑 *~_ 𝐒ʜꫝʜɪɴ 𝐑ᴀɴꫝᥫ᭡ 😩🫶_~*"

];
      const randomGreeting =
        greetings[Math.floor(Math.random() * greetings.length)];

      const greetingMessage = await api.sendMessage(
        threadId,
        {
          text: `@${senderId.split('@')[0]} ${randomGreeting}`,
          mentions: [senderId],
        },
        { quoted: message }
      );

      global.client.handleReply.push({
        name: this.config.name,
        author: senderId,
        messageID: greetingMessage.key.id,
        type: "chat"
      });

      return;
    }

    try {

      const apis = await axios.get(
        "https://raw.githubusercontent.com/MOHAMMAD-NAYAN-OFFICIAL/Nayan/main/api.json"
      );

      const apiss = apis.data.api;

      const response = await axios.get(
        `${apiss}/sim?type=ask&ask=${encodeURIComponent(usermsg)}&number=${senderId.split('@')[0]}`
      );

      const replyText =
        response.data.data?.msg ||
        "🤖 ⎯͢✧ আমি এর উত্তর জানি না ꫝᥫ᭡ 🐱";

      const sent = await api.sendMessage(
        threadId,
        { text: replyText },
        { quoted: message }
      );

      global.client.handleReply.push({
        name: this.config.name,
        author: senderId,
        messageID: sent.key.id,
        type: "chat"
      });

    } catch (err) {

      console.error("❌ Bot command error:", err);

      return api.sendMessage(
        threadId,
        {
          text: "❌ ⎯͢✧ বটের সাথে কথা বলতে সমস্যা হচ্ছে ꫝᥫ᭡ 🐱"
        },
        { quoted: message }
      );
    }
  },

  handleReply: async function ({ api, event, handleReply }) {

    const { threadId, message, body, senderId } = event;

    try {

      const apis = await axios.get(
        "https://raw.githubusercontent.com/MOHAMMAD-NAYAN-OFFICIAL/Nayan/main/api.json"
      );

      const apiss = apis.data.api;

      const response = await axios.get(
        `${apiss}/sim?type=ask&ask=${encodeURIComponent(body)}&number=${senderId.split('@')[0]}`
      );

      const replyText =
        response.data.data?.msg ||
        "🤖 ⎯͢✧ আমি এর উত্তর জানি না ꫝᥫ᭡ 🐱";

      const sent = await api.sendMessage(
        threadId,
        { text: replyText },
        { quoted: message }
      );

      global.client.handleReply.push({
        name: this.config.name,
        author: senderId,
        messageID: sent.key.id,
        type: "chat"
      });

    } catch (err) {

      console.error("❌ Error in bot handleReply:", err);

      return api.sendMessage(
        threadId,
        {
          text: "❌ ⎯͢✧ কথোপকথন চালিয়ে যেতে সমস্যা হচ্ছে ꫝᥫ᭡ 🐱"
        },
        { quoted: message }
      );
    }
  }
};
     
