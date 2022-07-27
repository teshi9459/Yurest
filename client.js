const fs = require("fs");
const { Client, GatewayIntentBits } = require("discord.js");
const { token } = require("./config/config.json");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

try {
  const eventFiles = fs
    .readdirSync("./events")
    .filter((file) => file.endsWith(".js"));
  for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args));
    } else {
      client.on(event.name, (...args) => event.execute(...args));
    }
  }
} catch (e) {
  console.error(e);
}

client.login(token);
