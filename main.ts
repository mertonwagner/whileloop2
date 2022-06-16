let item = 0
basic.forever(function () {
    while (item == 1) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.showIcon(IconNames.Happy)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        item = 0
    } else if (input.buttonIsPressed(Button.B)) {
        item = 1
    }
})
