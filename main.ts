basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            . # # . .
            # . . # .
            . . # . .
            . # . . .
            # # # # .
            `)
        basic.clearScreen()
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        basic.clearScreen()
    } else {
        basic.showNumber(0)
        basic.clearScreen()
    }
})
