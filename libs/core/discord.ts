//% color="#3d55f0" icon="\uf04b"
//% groups="['Client', 'Events - Channel', 'Events - Member', 'Events - Message']"
namespace discord {

    //% block="run bot with token $token"
    //% group="Client"
    export function run(token: string) {}

    //% block="this bot"
    //% group="Client"
    export function clientUser(): Member { return undefined }

    //% block="on guild channel delete $channel"
    //% draggableParameters
    //% group="Events - Channel"
    export function onGuildChannelDelete(handler: (channel: Channel) => void) {}

    //% block="on guild channel create $channel"
    //% draggableParameters
    //% group="Events - Channel"
    export function onGuildChannelCreate(handler: (channel: Channel) => void) {}
    
    //% block="on guild channel update from $before to $after"
    //% draggableParameters
    //% group="Events - Channel"
    export function onGuildChannelUpdate(handler: (before: Channel, after: Channel) => void) {}

    //% block="on member join $member"
    //% draggableParameters
    //% group="Events - Member"
    export function onMemberJoin(handler: (member: Member) => void) {}
    
    //% block="on member remove $member"
    //% draggableParameters
    //% group="Events - Member"
    export function onMemberRemove(handler: (member: Member) => void) {}

    //% block="on message $message"
    //% draggableParameters
    //% group="Events - Message"
    export function onMessage(handler: (message: Message) => void) {}
    
    //% block="on message edit $before $after"
    //% draggableParameters
    //% group="Events - Message"
    export function onMessageEdit(handler: (before: Message, after: Message) => void) {}
    
    //% block="on message delete $message"
    //% draggableParameters
    //% group="Events - Message"
    export function onMessageDelete(handler: (message: Message) => void) {}
}