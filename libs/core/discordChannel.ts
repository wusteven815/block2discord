//% block="Discord Channel" color="#3d55f0" icon="\uf120"
class Channel {

    _category: string
    //% blockCombine
    get category() { return this._category }

    _category_id: string
    //% blockCombine block="category id"
    get category_id() { return this._category_id }
    
    _created_at: string
    //% blockCombine block="created at"
    get created_at() { return this._created_at }

    _guild: string
    //% blockCombine
    get guild() { return this._guild }

    _id: string
    //% blockCombine
    get id() { return this._id }

    _jump_url: string
    //% blockCombine block="jump url"
    get jump_url() { return this._jump_url }

    _last_message: string
    //% blockCombine block="last message"
    get last_message() { return this._last_message }

    _last_message_id: string
    //% blockCombine block="last message id"
    get last_message_id() { return this._last_message_id }

    _mention: string
    //% blockCombine
    get mention() { return this._mention }

    _name: string
    //% blockCombine
    get name() { return this._name }

    _nsfw: string
    //% blockCombine
    get nsfw() { return this._nsfw }

    _overwrites: string
    //% blockCombine
    get overwrites() { return this._overwrites }

    _permissions_synced: string
    //% blockCombine block="permissions synced"
    get permissions_synced() { return this._permissions_synced }

    _position: string
    //% blockCombine
    get position() { return this._position }

    _slowmode_delay: string
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
        embed?: string,
        file?: string,
        tts?: boolean) {
    }

}