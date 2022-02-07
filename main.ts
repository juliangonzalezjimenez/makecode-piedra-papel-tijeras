let ALAZAR = 0
input.onGesture(Gesture.Shake, function () {
    ALAZAR = randint(1, 3)
    if (ALAZAR == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (ALAZAR == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            . # . # .
            `)
    }
})
basic.forever(function () {
	
})
