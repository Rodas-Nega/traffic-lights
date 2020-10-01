let strip: neopixel.Strip = null
// Created By: Rodas N.
// Created On: Oct 1 2020
// 
// This program flashes traffic light signals on the LEDs
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    strip.clear()
    basic.pause(1000)
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
    strip.clear()
    basic.pause(1000)
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    strip.clear()
    basic.pause(1000)
    basic.showIcon(IconNames.Yes)
})
