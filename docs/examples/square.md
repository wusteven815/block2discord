# Square

A simple example

```blocks
discord.onMemberJoin(function (member) {
    channel = member.guild.fetchChannel(1102033430436393000)
    embed = discordEmbed.createEmbed(
    "Welcome!",
    "This is my server.",
    discordColour.gold()
    )
    embed.setImage(
    "https://upload.wikimedia.org/wikipedia/commons/4/4b/Discord-logo-blurple.png"
    )
    channel.send(
    member.mention,
    embed,
    "",
    false
    )
})
let embed: Embed = null
let channel: Channel = null
discord.run("", "")
```