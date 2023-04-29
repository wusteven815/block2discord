//% block="Discord Embed" color="#3d55f0" icon="\uf302"
namespace discordEmbed {

    //% block="create embed | - title $title - description $description - colour $colour"
    //% blockSetVariable=embed
    //% inlineInputMode=external
    export function createEmbed(title: string, description: string, colour: string): Embed {
        return undefined
    }
}

//% blockNamespace="discordEmbed"
class Embed { 
    
    //% block="set thumbnail to embed $this - image url $iconUrl"
    //% this.defl=embed
    //% inlineInputMode=external
    public setThumbnail(iconUrl: string) {}

    //% block="set image to embed $this - image url $iconUrl"
    //% this.defl=embed
    //% inlineInputMode=external
    public setImage(iconUrl: string) {}

    //% block="set author to embed $this - name $name - icon url $iconUrl"
    //% this.defl=embed
    //% inlineInputMode=external
    public setAuthor(name: string, iconUrl: string) {}

    //% block="set footer to embed $this - text $text - icon url $iconUrl"
    //% this.defl=embed
    //% inlineInputMode=external
    public setFooter(text: string, iconUrl: string) {}

    //% block="add field to embed $this - name $name - value $value - inline? $inline"
    //% this.defl=embed
    //% inlineInputMode=external
    public addField(name: string, value: string, inline: boolean) {}

}