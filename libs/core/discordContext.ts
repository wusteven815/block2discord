//% block="Discord Context" color="#3d55f0" icon="\uf013"
class Context { 

    _args: string[]
    //% blockCombine
    get args() { return this._args }

    _author: Member
    //% blockCombine
    get author() { return this._author }

    _bot: boolean
    //% blockCombine
    get bot() { return this._bot }

    _channel: Channel
    //% blockCombine
    get channel() { return this._channel }

    _guild: Guild
    //% blockCombine
    get guild() { return this._guild }

    _me: Member
    //% blockCombine
    get me() { return this._me }

    _message: Message
    //% blockCombine
    get message() { return this._message }

    //% block="send to $this - message $content||- embed $embed - file $file - text to speech $tts"
    //% this.defl=context
    //% content.defl="Hello World!"
    //% expandableArgumentMode="toggle"
    //% inlineInputMode=external
    public send(
        content: string,
        embed?: Embed,
        file?: File,
        tts?: boolean) {
    }

    //% block="save message and send to $this - message $content||- embed $embed - file $file - text to speech $tts"
    //% this.defl=channel
    //% content.defl="Hello World!"
    //% expandableArgumentMode="toggle"
    //% inlineInputMode=external
    //% blockSetVariable=return_message
    public sendAlt(
        content: string,
        embed?: Embed,
        file?: File,
        tts?: boolean): Message { return undefined }

    //% block="reply to $this - message $content||- embed $embed - file $file - text to speech $tts"
    //% this.defl=context
    //% content.defl="Hello World!"
    //% expandableArgumentMode="toggle"
    //% inlineInputMode=external
    public reply(
        content: string,
        embed?: Embed,
        file?: File,
        tts?: boolean) {
    }

    //% block="save message and reply to $this - message $content||- embed $embed - file $file - text to speech $tts"
    //% this.defl=channel
    //% content.defl="Hello World!"
    //% expandableArgumentMode="toggle"
    //% inlineInputMode=external
    //% blockSetVariable=return_message
    public replyAlt(
        content: string,
        embed?: Embed,
        file?: File,
        tts?: boolean): Message { return undefined }
}