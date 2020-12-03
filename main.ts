input.onButtonPressed(Button.A, function () {
    mooncar.Filllight(mooncar.Switch.Open)
    mooncar.ColorSensorRecord(mooncar.ColorPart.Red)
    basic.showString("R")
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    mooncar.Filllight(mooncar.Switch.Open)
    mooncar.ColorSensorRecord(mooncar.ColorPart.Green)
    basic.showString("G")
    basic.pause(500)
    basic.clearScreen()
})
let strip = neopixel.create(DigitalPin.P12, 8, NeoPixelMode.RGB)
mooncar.ColorSensorinit()
basic.forever(function () {
    mooncar.ColorSensorReadColor()
    if (mooncar.ReadColorEqual(mooncar.ColorPart.Red)) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (mooncar.ReadColorEqual(mooncar.ColorPart.Green)) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    strip.show()
})
