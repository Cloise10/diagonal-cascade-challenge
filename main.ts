// -press button A to show a diagonal cascade
// -original code for diagonal cascade is used
input.onButtonPressed(Button.A, function () {
    led.toggle(0, 0)
    basic.pause(100)
    led.toggle(0, 1)
    led.toggle(1, 0)
    basic.pause(100)
    led.toggle(2, 0)
    led.toggle(1, 1)
    led.toggle(0, 2)
    basic.pause(100)
    led.toggle(3, 0)
    led.toggle(2, 1)
    led.toggle(1, 2)
    led.toggle(0, 3)
    basic.pause(100)
    led.toggle(4, 0)
    led.toggle(3, 1)
    led.toggle(2, 2)
    led.toggle(1, 3)
    led.toggle(0, 4)
    basic.pause(100)
    led.toggle(4, 1)
    led.toggle(3, 2)
    led.toggle(2, 3)
    led.toggle(1, 4)
    basic.pause(100)
    led.toggle(4, 2)
    led.toggle(3, 3)
    led.toggle(2, 4)
    basic.pause(100)
    led.toggle(4, 3)
    led.toggle(3, 4)
    basic.pause(100)
    led.toggle(4, 4)
})
// when button A+B is pressed, a diagonal line is shown again and again
input.onButtonPressed(Button.AB, function () {
    while (true) {
        while (true) {
            index = 0
            while (index <= 4) {
                led.plot(index, index)
                basic.pause(100)
                index += 1
            }
            while (index >= 0) {
                led.unplot(index, index)
                basic.pause(100)
                index += -1
            }
        }
    }
})
// -when button b is pressed, a diagonal line is shown
// -was trying for a diagonal cascade using nested loops, but it doesn't work
input.onButtonPressed(Button.B, function () {
    while (true) {
        while (true) {
            led.toggle(index, index)
            basic.pause(100)
            index += 1
        }
    }
})
// shake to stop or reset a program
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
// shows the program is starting
let index = 0
for (let index2 = 0; index2 < 2; index2++) {
    basic.showIcon(IconNames.Happy)
    basic.pause(100)
    basic.showIcon(IconNames.Happy)
    basic.pause(100)
}
basic.clearScreen()
