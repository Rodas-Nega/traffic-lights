strip: neopixel.Strip = None
# Created By: 

def on_forever():
    global strip
    strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    strip.set_pixel_color(2, neopixel.colors(NeoPixelColors.GREEN))
    strip.show()
    strip.clear()
    basic.pause(1000)
    strip.set_pixel_color(1, neopixel.colors(NeoPixelColors.YELLOW))
    strip.show()
    strip.clear()
    basic.pause(1000)
    strip.set_pixel_color(0, neopixel.colors(NeoPixelColors.RED))
    strip.show()
    strip.clear()
    basic.pause(1000)
    basic.show_icon(IconNames.YES)
basic.forever(on_forever)
