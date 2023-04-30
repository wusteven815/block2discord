//% block="Discord Colour" color="#3d55f0" icon="\uf1fc"
namespace discordColour {

    //%block yellow
    export function yellow(): Colour { return undefined }

    //%block teal
    export function teal(): Colour { return undefined }

    //%block red
    export function red(): Colour { return undefined }

    //%block random
    export function random(): Colour { return undefined }

    //%block purple
    export function purple(): Colour { return undefined }

    //%block orange
    export function orange(): Colour { return undefined }

    //%block og_blurple
    export function og_blurple(): Colour { return undefined }

    //%block magenta
    export function magenta(): Colour { return undefined }

    //%block lighter_grey
    export function lighter_grey(): Colour { return undefined }

    //%block lighter_gray
    export function lighter_gray(): Colour { return undefined }

    //%block light_grey
    export function light_grey(): Colour { return undefined }

    //%block light_gray
    export function light_gray(): Colour { return undefined }

    //%block light_embed
    export function light_embed(): Colour { return undefined }

    //%block greyple
    export function greyple(): Colour { return undefined }

    //%block green
    export function green(): Colour { return undefined }

    //%block gold
    export function gold(): Colour { return undefined }

    //%block fuchsia
    export function fuchsia(): Colour { return undefined }

    //%block darker_grey
    export function darker_grey(): Colour { return undefined }

    //%block darker_gray
    export function darker_gray(): Colour { return undefined }

    //%block dark_theme
    export function dark_theme(): Colour { return undefined }

    //%block dark_teal
    export function dark_teal(): Colour { return undefined }

    //%block dark_red
    export function dark_red(): Colour { return undefined }

    //%block dark_purple
    export function dark_purple(): Colour { return undefined }

    //%block dark_orange
    export function dark_orange(): Colour { return undefined }

    //%block dark_magenta
    export function dark_magenta(): Colour { return undefined }

    //%block dark_grey
    export function dark_grey(): Colour { return undefined }

    //%block dark_green
    export function dark_green(): Colour { return undefined }

    //%block dark_gray
    export function dark_gray(): Colour { return undefined }

    //%block dark_gold
    export function dark_gold(): Colour { return undefined }

    //%block dark_embed
    export function dark_embed(): Colour { return undefined }

    //%block dark_blue
    export function dark_blue(): Colour { return undefined }

    //%block brand_red
    export function brand_red(): Colour { return undefined }

    //%block brand_green
    export function brand_green(): Colour { return undefined }

    //%block blurple
    export function blurple(): Colour { return undefined }

    //%block blue
    export function blue(): Colour { return undefined }

    //%block="h $h s $s v $v"
    //% blockSetVariable=my_colour
    export function fromHsv(h: number, s: number, v: number): Colour { return undefined }

    //%block="r $r g $g b $b"
    //% blockSetVariable=my_colour
    export function fromRgb(r: number, g: number, b: number): Colour { return undefined }

    //%block="# $str"
    //% blockSetVariable=my_colour
    export function fromStr(str: string): Colour { return undefined }
}

//% blockNamespace="discordEmbed"
class Colour {}