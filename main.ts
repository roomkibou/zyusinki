radio.onReceivedString(function (receivedString) {
    信号 = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    ポイント = Math.map(信号, -128, -42, 0, 9)
    serial.writeValue("x", 信号)
    serial.writeValue("p", ポイント)
    led.plotBarGraph(
    ポイント,
    9
    )
    music.ringTone(ポイント * -1)
})
let ポイント = 0
let 信号 = 0
radio.setGroup(1)
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
