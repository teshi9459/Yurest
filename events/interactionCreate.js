const fs = require("fs");
const { Collection, InteractionType } = require("discord.js");
module.exports = {
  name: "interactionCreate",
  async execute(interaction) {
    if (!interaction.type === InteractionType.ApplicationCommand) return;
    const client = interaction.client;
    client.commands = new Collection();
    const commandFolder = fs.readdirSync("./commands");

    for (const folder of commandFolder) {
      const commandFiles = fs
        .readdirSync("./commands/" + folder)
        .filter((file) => file.endsWith(".js"));

      for (const file of commandFiles) {
        const command = require(`../commands/${folder}/${file}`);
        client.commands.set(command.data.name, command);
      }
    }

    const date = new Date().toISOString();
    let content;
    try {
      content = `\n${date}>>${
        interaction.commandName
      }.${interaction.options.getSubcommand()}@${interaction.user.tag}#${
        interaction.channel.name
      }`;
    } catch (e) {
      content = `\n${date}>>${interaction.commandName}@${interaction.user.tag}#${interaction.channel.name}`;
    }
    console.log(content);

    const command = client.commands.get(interaction.commandName);

    if (!command) return;
    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: "Ein Fehler ist aufgetreten qwq\n*kontaktiere den Developer*",
        ephemeral: true,
      });
    }
  },
};
