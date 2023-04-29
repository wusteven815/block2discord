//% block="Discord Member" color="#3d55f0" icon="\uf007"
class Member { 

    _avatar: string
    //% blockCombine
    get avatar() { return this._avatar }

    _banner: string
    //% blockCombine
    get banner() { return this._banner }

    _bot: boolean
    //% blockCombine
    get bot() { return this._bot }

    _colour: string
    //% blockCombine
    get colour() { return this._colour }

    _created_at: string
    //% blockCombine block="created at"
    get created_at() { return this._created_at }

    _desktop_status: string
    //% blockCombine block="desktop status"
    get desktop_status() { return this._desktop_status }

    _discriminator: string
    //% blockCombine
    get discriminator() { return this._discriminator }

    _display_avatar: string
    //% blockCombine block="display avatar"
    get display_avatar() { return this._display_avatar }

    _display_name: string
    //% blockCombine block="display name"
    get display_name() { return this._display_name }

    _dm_channel: Channel
    //% blockCombine block="dm channel"
    get dm_channel() { return this._dm_channel }

    _guild: Guild
    //% blockCombine
    get guild() { return this._guild }

    _guild_avatar: string
    //% blockCombine block="guild avatar"
    get guild_avatar() { return this._guild_avatar }

    _guild_permissions: string
    //% blockCombine block="guild permissions"
    get guild_permissions() { return this._guild_permissions }

    _id: boolean
    //% blockCombine
    get id() { return this._id }

    _joined_at: string
    //% blockCombine block="joined at"
    get joined_at() { return this._joined_at }

    _mention: string
    //% blockCombine
    get mention() { return this._mention }

    _mobile_status: string
    //% blockCombine block="mobile status"
    get mobile_status() { return this._mobile_status }

    _name: string
    //% blockCombine
    get name() { return this._name }

    _nick: string
    //% blockCombine
    get nick() { return this._nick }

    _roles: string
    //% blockCombine
    get roles() { return this._roles }

    _status: string
    //% blockCombine
    get status() { return this._status }

    _timed_out_until: string
    //% blockCombine block="timed out until"
    get timed_out_until() { return this._timed_out_until }

    _top_role: string
    //% blockCombine block="top role"
    get top_role() { return this._top_role }

    _web_status: string
    //% blockCombine block="web status"
    get web_status() { return this._web_status }

}