input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Sad)
    basic.pause(500)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.InBackground)
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Sad)
        servos.P1.setAngle(45)
        basic.pause(500)
        servos.P1.setAngle(135)
        basic.pause(500)
    }
    servos.P1.setAngle(90)
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(500)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.InBackground)
    for (let index = 0; index < 4; index++) {
        servos.P1.setAngle(110)
        basic.pause(200)
        basic.showIcon(IconNames.Heart)
        servos.P1.setAngle(70)
        basic.pause(200)
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.showIcon(IconNames.Happy)
    servos.P1.setAngle(90)
    basic.pause(500)
})
servos.P1.setAngle(90)
for (let index = 0; index < 2; index++) {
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(25)
    basic.showIcon(IconNames.Square)
    basic.pause(25)
}
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
})
