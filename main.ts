input.onButtonPressed(Button.A, function () {
    let _4digit: grove.TM1637 = null
    lengte = Math.round(grove.measureInCentimeters(DigitalPin.P0))
    _4digit.show(lengte)
})
input.onButtonPressed(Button.AB, function () {
    oppervlakte = lengte * breedte
    basic.showString("" + (lengte))
    basic.pause(2000)
    basic.showString("" + (breedte))
    basic.pause(2000)
    display.show(oppervlakte)
})
input.onButtonPressed(Button.B, function () {
    breedte = Math.round(grove.measureInCentimeters(DigitalPin.P0))
    display.show(breedte)
})
let display: grove.TM1637 = null
let oppervlakte = 0
let breedte = 0
let lengte = 0
lengte = 0
breedte = 0
oppervlakte = 0
display = grove.createDisplay(DigitalPin.P1, DigitalPin.P15)
