let moving = 0
let Start = 0
radio.setGroup(144)
radio.setTransmitPower(7)
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
loops.everyInterval(50, function on_every_interval() {
    
    if (input.buttonIsPressed(Button.AB)) {
        if (moving == 0) {
            radio.sendNumber(2)
            moving = 1
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
        } else {
            radio.sendNumber(1)
            moving = 0
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
        }
        
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(4)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        moving = 1
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(5)
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        moving = 1
    } else if (input.pinIsPressed(TouchPin.P0)) {
        radio.sendNumber(6)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        moving = 1
    } else if (input.pinIsPressed(TouchPin.P0)) {
        radio.sendNumber(6)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        moving = 1
    } else if (moving == 1) {
        radio.sendNumber(2)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    
})
