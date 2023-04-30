//% block="Discord Member" color="#3d55f0" icon="\uf007"
class Member { 

    _bot: boolean
    //% blockCombine
    get bot() { return this._bot }

    _colour: Colour
    //% blockCombine
    get colour() { return this._colour }

    _discriminator: string
    //% blockCombine
    get discriminator() { return this._discriminator }

    _display_name: string
    //% blockCombine block="display name"
    get display_name() { return this._display_name }

    _dm_channel: Channel
    //% blockCombine block="dm channel"
    get dm_channel() { return this._dm_channel }

    _guild: Guild
    //% blockCombine
    get guild() { return this._guild }

    _id: boolean
    //% blockCombine
    get id() { return this._id }

    _mention: string
    //% blockCombine
    get mention() { return this._mention }

    _name: string
    //% blockCombine
    get name() { return this._name }

    _nick: string
    //% blockCombine
    get nick() { return this._nick }

    _raw_status: string
    //% blockCombine
    get status() { return this._raw_status }

}