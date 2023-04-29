//% block="Discord Message" color="#3d55f0" icon="\uf075"
class Message {

    _activity: string
    //% blockCombine
    get activity() { return this._activity }

    _application: string
    //% blockCombine
    get application() { return this._application }

    _application_id: string
    //% blockCombine block="application id"
    get application_id() { return this._application_id }

    _attachments: string
    //% blockCombine
    get attachments() { return this._attachments }

    _author: Member
    //% blockCombine
    get author() { return this._author }

    _channel: Channel
    //% blockCombine
    get channel() { return this._channel }

    _channel_mentions: string
    //% blockCombine block="channel mentions"
    get channel_mentions() { return this._channel_mentions }

    _clean_content: string
    //% blockCombine block="clean content"
    get clean_content() { return this._clean_content }

    _components: string
    //% blockCombine
    get components() { return this._components }

    _content: string
    //% blockCombine
    get content() { return this._content }

    _created_at: string
    //% blockCombine block="created at"
    get created_at() { return this._created_at }

    _edited_at: string
    //% blockCombine block="edited at"
    get edited_at() { return this._edited_at }

    _embeds: string
    //% blockCombine
    get embeds() { return this._embeds }

    _flags: string
    //% blockCombine
    get flags() { return this._flags }

    _guild: string
    //% blockCombine
    get guild() { return this._guild }

    _id: string
    //% blockCombine
    get id() { return this._id }

    _interaction: string
    //% blockCombine
    get interaction() { return this._interaction }

    _jump_url: string
    //% blockCombine block="jump url"
    get jump_url() { return this._jump_url }

    _mention_everyone: string
    //% blockCombine block="mention everyone"
    get mention_everyone() { return this._mention_everyone }

    _mentions: string
    //% blockCombine
    get mentions() { return this._mentions }

    _nonce: string
    //% blockCombine
    get nonce() { return this._nonce }

    _pinned: string
    //% blockCombine
    get pinned() { return this._pinned }

    _position: string
    //% blockCombine
    get position() { return this._position }

    _raw_channel_mentions: string
    //% blockCombine block="raw channel mentions"
    get raw_channel_mentions() { return this._raw_channel_mentions }

    _raw_mentions: string
    //% blockCombine block="raw mentions"
    get raw_mentions() { return this._raw_mentions }

    _raw_role_mentions: string
    //% blockCombine block="raw role mentions"
    get raw_role_mentions() { return this._raw_role_mentions }

    _reactions: string
    //% blockCombine
    get reactions() { return this._reactions }

    _reference: string
    //% blockCombine
    get reference() { return this._reference }

    _role_mentions: string
    //% blockCombine block="role mentions"
    get role_mentions() { return this._role_mentions }

    _role_subscription: string
    //% blockCombine block="role subscription"
    get role_subscription() { return this._role_subscription }

    _stickers: string
    //% blockCombine
    get stickers() { return this._stickers }

    _system_content: string
    //% blockCombine block="system content"
    get system_content() { return this._system_content }

    _tts: string
    //% blockCombine
    get tts() { return this._tts }

    _type: string
    //% blockCombine
    get type() { return this._type }

    _webhook_id: string
    //% blockCombine block="webhook id"
    get webhook_id() { return this._webhook_id }

}
