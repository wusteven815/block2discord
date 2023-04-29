//% color="#3d55f0" icon="\uf04b"
//% groups="['Client', 'Events']"
namespace discord {

    //% block="run bot with token $token"
    //% group="Client"
    export function run(token: string) {}

    //% block="this bot"
    //% group="Client"
    export function clientUser(): Member { return undefined }

    //% block="on guild channel delete $channel"
    //% draggableParameters
    //% group="Events"
    export function onGuildChannelDelete(handler: (channel: Channel) => void) {}

    //% block="on guild channel create $channel"
    //% draggableParameters
    //% group="Events"
    export function onGuildChannelCreate(handler: (channel: Channel) => void) {}
    
    //% block="on guild channel update from $before to $after"
    //% draggableParameters
    //% group="Events"
    export function onGuildChannelUpdate(handler: (before: Channel, after: Channel) => void) {}

    //% block="on message $message"
    //% draggableParameters
    //% group="Events"
    export function onMessage(handler: (message: Message) => void) {}
}

