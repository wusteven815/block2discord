//% block="Discord Channel" color="#3d55f0" icon="\uf120"
class Channel {

    _category_id: number
    //% blockCombine block="category id"
    get category_id() { return this._category_id }

    _guild: string
    //% blockCombine
    get guild() { return this._guild }

    _id: number
    //% blockCombine
    get id() { return this._id }

    _jump_url: string
    //% blockCombine block="jump url"
    get jump_url() { return this._jump_url }

    _last_message: Message
    //% blockCombine block="last message"
    get last_message() { return this._last_message }

    _last_message_id: number
    //% blockCombine block="last message id"
    get last_message_id() { return this._last_message_id }

    _mention: string
    //% blockCombine
    get mention() { return this._mention }

    _name: string
    //% blockCombine
    get name() { return this._name }

    _nsfw: boolean
    //% blockCombine
    get nsfw() { return this._nsfw }

    _position: number
    //% blockCombine
    get position() { return this._position }

    _slowmode_delay: number
    //% blockCombine block="slowmode delay"
    get slowmode_delay() { return this._slowmode_delay }

    _topic: string
    //% blockCombine
    get topic() { return this._topic }

    //% block="send in $this - message $content||- embed $embed - file $file - text to speech $tts"
    //% this.defl=channel
    //% content.defl="Hello World!"
    //% expandableArgumentMode="toggle"
    //% inlineInputMode=external
    public send(
        content: string,
        embed?: Embed,
        file?: File,
        tts?: boolean) {
    }

    //% block="save message and send in $this - message $content||- embed $embed - file $file - text to speech $tts"
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

}