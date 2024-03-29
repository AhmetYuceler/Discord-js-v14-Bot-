module.exports = new Underline.Locale({
  locale: "en",
  data: {
    userErrors: {
      coolDown: {
        user: "You can use this interaction in {0} seconds.",
        member: "You can use this interaction in {0} seconds in this guild.",
        guild: "This interaction can be used again in {0} seconds in this guild.",
        channel: "This interaction can be used again in {0} seconds in this channel.",
        message: "This interaction can be used again in {0} seconds in this message.",
        any: "You can use this interaction in {0} seconds."
      },
      disabled: "This interaction is disabled.",
      guildOnly: "This is a guild only interaction.",
      blocked: "You are banned from the bot.",
      developerOnly: "This is a developer only interaction.",
      guildOwnerOnly: "This is a guild owner only interaction.",
      botPermsRequired: "Bot needs {0} permissions to run this interaction.",
      userPermsRequired: "You need {0} permissions to run this interaction."
    },
    example: {
      success: "Succesfuly done.",
      error: "Sorry for guild {0}, i couldnt publish..."
    },
    mongooseDatabase: {}
  },
  commands: [
    {
      originalName: ["profil"],
      name: ["profile"],
      description: "Shows the profile of the user."
    },
    {
      originalName: ["unban"],
      name: ["unban"],
      description: "Banlı bir kullanıcının banını açmanızı sağlar."
    },
    {
      originalName: ["buton-yolla"],
      name: ["buton-yolla"],
      description: "Buton yollar"
    },
    {
      originalName: ["eval"],
      name: ["eval"],
      description: "Bot yetkilileri için JavaScript çalıştırma komutu."
    },
    {
      originalName: ["matamatik"],
      name: ["matamatik"],
      description: "Basit 4 işlem sorularını yapmanızı sağlar."
    },
    {
      originalName: ["modal","yolla"],
      name: ["modal","yolla"],
      description: ".."
    },
    {
      originalName: ["reload"],
      name: ["reload"],
      description: "Bot yetkilileri için Underline reload komutu."
    },
    {
      originalName: ["moderasyon","at"],
      name: ["moderasyon","at"],
      description: "Sunucudan üye atmanızı sağlar."
    }
  ]
});