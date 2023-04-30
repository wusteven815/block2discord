//% block="Discord Message" color="#3d55f0" icon="\uf075"
class Message {

    _application_id: string
    //% blockCombine block="application id"
    get application_id() { return this._application_id }

    _author: Member
    //% blockCombine
    get author() { return this._author }

    _channel: Channel
    //% blockCombine
    get channel() { return this._channel }

    _clean_content: string
    //% blockCombine block="clean content"
    get clean_content() { return this._clean_content }

    _content: string
    //% blockCombine
    get content() { return this._content }

    _embeds: Embed[]
    //% blockCombine
    get embeds() { return this._embeds }

    _guild: Guild
    //% blockCombine
    get guild() { return this._guild }

    _id: number
    //% blockCombine
    get id() { return this._id }

    _jump_url: string
    //% blockCombine block="jump url"
    get jump_url() { return this._jump_url }

    _mention_everyone: boolean
    //% blockCombine block="mention everyone"
    get mention_everyone() { return this._mention_everyone }

    _mentions: Member[]
    //% blockCombine
    get mentions() { return this._mentions }

    _pinned: boolean
    //% blockCombine
    get pinned() { return this._pinned }

    _position: number
    //% blockCombine
    get position() { return this._position }

    _raw_channel_mentions: number[]
    //% blockCombine block="raw channel mentions"
    get raw_channel_mentions() { return this._raw_channel_mentions }

    _raw_mentions: number[]
    //% blockCombine block="raw mentions"
    get raw_mentions() { return this._raw_mentions }

    _raw_role_mentions: number[]
    //% blockCombine block="raw role mentions"
    get raw_role_mentions() { return this._raw_role_mentions }

    _reference: Message
    //% blockCombine
    get reference() { return this._reference }

    _tts: boolean
    //% blockCombine
    get tts() { return this._tts }

    //% block="edit message $this - content $content - embed $embed - attachments $attachments"
    //% this.defl=message
    //% content.defl="Hello World!"
    //% inlineInputMode=external
    public edit(
        content: string,
        embed: Embed,
        attachments: File[]) {
    }

    //% block="save message and edit $this - content $content - embed $embed - attachments $attachments"
    //% this.defl=message
    //% content.defl="Hello World!"
    //% inlineInputMode=external
    //% blockSetVariable=return_message
    public editAlt(
        content: string,
        embed: Embed,
        attachments: File[]): Message { return undefined }

    //% block="reply to $this - message $content||- embed $embed - file $file - text to speech $tts"
    //% this.defl=message
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
    //% this.defl=message
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
