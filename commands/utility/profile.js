const { SlashCommandBuilder } = require("@discordjs/builders");
const dc = require("../../libs/dc");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("profile")
    .setDescription("Einstellungen für ein Profil")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("create")
        .setDescription("erstelle ein neues Profil")
        .addStringOption((option) =>
          option
            .setName("username")
            .setDescription(
              "max 50 Zeichen (a-Z, 0-9 , Sonderzeichen, KEINE '\"`)"
            )
            .setRequired(true)
        )
        .addAttachmentOption((option) =>
          option
            .setName("picture")
            .setDescription(
              "Bilddatei die als Profilbild benutzt wird (nur jpeg/png)"
            )
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("search")
        .setDescription("sucht ein Profil")
        .addStringOption((option) =>
          option
            .setName("username")
            .setDescription("zu suchendes Profil")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("edit")
        .setDescription("bearbeite ein Profil")
        .addStringOption((option) =>
          option
            .setName("username")
            .setDescription(
              "max 50 Zeichen (a-Z, 0-9 , Sonderzeichen, KEINE '\"`)"
            )
        )
        .addAttachmentOption((option) =>
          option
            .setName("picture")
            .setDescription(
              "Bilddatei die als Profilbild benutzt wird (nur jpeg/png)"
            )
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("delete")
        .setDescription("lösche ein Profil")
        .addStringOption((option) =>
          option
            .setName("check")
            .setDescription(
              "gebe den Namen des zu löschenden Profils ein und füge ein 12_4 hinten dran"
            )
        )
    ),
  async execute(interaction) {
    //check strings and addAttachmentOption
    switch (interaction.options.getSubcommand()) {
      case "create":
        break;
      case "search":
        break;
      case "edit":
        break;
      case "delete":
        break;
    }
  },
};
