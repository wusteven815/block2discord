//% block="Discord Guild" color="#3d55f0" icon="\uf0c0"
class Guild { 

    _approximate_member_count: number
    //% blockCombine block="approximate member count"
    get approximate_member_count() { return this._approximate_member_count }

    _channels: Channel[]
    //% blockCombine
    get channels() { return this._channels }

    _description: string
    //% blockCombine
    get description() { return this._description }

    _features: string[]
    //% blockCombine
    get features() { return this._features }

    _forums: Channel[]
    //% blockCombine
    get forums() { return this._forums }

    _icon: string
    //% blockCombine
    get icon() { return this._icon }

    _id: number
    //% blockCombine
    get id() { return this._id }

    _me: Member
    //% blockCombine
    get me() { return this._me }

    _member_count: number
    //% blockCombine block="member count"
    get member_count() { return this._member_count }

    _members: Member[]
    //% blockCombine
    get members() { return this._members }

    _mfa_level: number
    //% blockCombine block="mfa level"
    get mfa_level() { return this._mfa_level }

    _name: string
    //% blockCombine
    get name() { return this._name }

    _nsfw_level: string
    //% blockCombine block="nsfw level"
    get nsfw_level() { return this._nsfw_level }

    _owner: Member
    //% blockCombine
    get owner() { return this._owner }

    _owner_id: number
    //% blockCombine block="owner id"
    get owner_id() { return this._owner_id }

    _text_channels: Channel[]
    //% blockCombine block="text channels"
    get text_channels() { return this._text_channels }

    _vanity_url: string
    //% blockCombine block="vanity url"
    get vanity_url() { return this._vanity_url }

    //% block="fetch member with id $id from $this"
    //% this.defl=guild
    //% blockSetVariable=member
    public fetchMember(id: number): Member { return undefined }

    //% block="fetch channel with id $id from $this"
    //% this.defl=guild
    //% blockSetVariable=channel
    public fetchChannel(id: number): Channel { return undefined }

}