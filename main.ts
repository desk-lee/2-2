let x = 0
let y = 0
let change = 1
basic.forever(function () {
    led.plot(x, y)
    basic.pause(500)
    led.unplot(x, y)
    basic.pause(500)
    x += change
    y += change
    if (x == 5) {
        change = -1
    }
    if (x == -1) {
        change = 1
    }
})
