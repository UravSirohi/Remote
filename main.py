moving = 0
new_password = 0
Start = 0
radio.set_group(144)
radio.set_transmit_power(7)
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
old_password = 399
basic.pause(5000)
 
 
def on_every_interval():
    global moving
    if input.button_is_pressed(Button.AB):
        if moving == 0:
            radio.send_number(2)
            moving = 1
            strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
        else:
            radio.send_number(1)
            moving = 0
            strip.show_color(neopixel.colors(NeoPixelColors.RED))
    elif input.button_is_pressed(Button.A):
        radio.send_number(4)
        strip.show_color(neopixel.colors(NeoPixelColors.BLUE))
        moving = 1
    elif input.button_is_pressed(Button.B):
        radio.send_number(5)
        strip.show_color(neopixel.colors(NeoPixelColors.PURPLE))
        moving = 1
    elif moving == 1:
        radio.send_number(2)
        moving = 1
        strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
loops.every_interval(50, on_every_interval)
 
 
def on_every_interval2():
    global new_password, old_password
    new_password = randint(0, 100)
    radio.send_value(str(old_password), new_password)
    old_password = new_password
loops.every_interval(5000, on_every_interval2)
