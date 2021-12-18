let moving = 0
radio.setGroup(144)
radio.setTransmitPower(7)
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
let turn_type = 1
loops.everyInterval(100, function () {
    if (input.pinIsPressed(TouchPin.P0) && input.pinIsPressed(TouchPin.P1)) {
        if (moving == 0) {
            radio.sendNumber(2)
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
            moving = 1
        } else {
            radio.sendNumber(1)
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            moving = 0
        }
    } else if (input.pinIsPressed(TouchPin.P0)) {
        if (turn_type == 1) {
            radio.sendNumber(4)
        } else {
            radio.sendNumber(6)
        }
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        moving = 1
    } else if (input.pinIsPressed(TouchPin.P1)) {
        if (turn_type == 1) {
            radio.sendNumber(5)
        } else {
            radio.sendNumber(7)
        }
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        moving = 1
    } else if (input.pinIsPressed(TouchPin.P2)) {
        radio.sendNumber(3)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        moving = 1
    } else if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        if (turn_type == 1) {
            turn_type = 0
        } else {
            turn_type = 1
        }
    } else if (moving == 1) {
        radio.sendNumber(2)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
})
