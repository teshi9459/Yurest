const fs = require("fs");
module.exports = {
  name: "interactionCreate",
  async execute(interaction) {
    if (!interaction.isButton()) return;
    console.log(
      `${interaction.user.tag} in #${interaction.channel.name} triggered an Buttoninteraction (${interaction.customId}).`
    );
    try {
      //do
    } catch (error) {
      console.error(error);
    }
  },
};
