# High-level languages

Shows information about Python and JavaScript

```blocks
discord.onBotCommand("js", function (context) {
    embed = discordEmbed.createEmbed(
    "JavaScript",
    "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).",
    discordColour.yellow()
    )
    embed.setThumbnail(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png"
    )
    context.reply(
    "",
    embed,
    "",
    false
    )
})
discord.onBotCommand("py", function (context) {
    embed = discordEmbed.createEmbed(
    "Python",
    "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation via the off-side rule.",
    discordColour.blue()
    )
    embed.setThumbnail(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
    )
    context.reply(
    "",
    embed,
    "",
    false
    )
})
let embed: Embed = null
discord.run("MTAxODI3NDk4MDg4ODMzNDUwNg.GTvfAC.105NeUPJwGg61ezeaiPW_kmWl5ZrqmYYUPCDY8", ".")

```