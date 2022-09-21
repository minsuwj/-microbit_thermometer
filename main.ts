input.onButtonPressed(Button.A, function () {
    basic.showNumber(max_temperature)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    if (current_temperature > 30) {
        basic.showIcon(IconNames.Sad)
    } else if (current_temperature < 10) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(min_temperature)
    basic.clearScreen()
})
let min_temperature = 0
let max_temperature = 0
let current_temperature = 0
current_temperature = input.temperature()
max_temperature = current_temperature
min_temperature = current_temperature
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    current_temperature = input.temperature()
    if (current_temperature < min_temperature) {
        min_temperature = current_temperature
    }
    if (current_temperature > max_temperature) {
        max_temperature = current_temperature
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
})
