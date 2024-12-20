input.onButtonPressed(Button.A, function () {
    dance()
})
function dance () {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 255)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, 255)
    xiamiBoard.setIndexColor(xiamiBoard.ledRange(0, 1), 0x00ffff)
}
let distance = 0
basic.showIcon(IconNames.Triangle)
basic.forever(function () {
    distance = pins.map(
    xiamiBoard.Ultrasonic(),
    0,
    25,
    0,
    255
    )
    led.plotBarGraph(
    distance,
    255
    )
    if (distance < 80) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, 80)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, 80)
        xiamiBoard.LED(1, 0, 0)
        basic.pause(500)
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 80)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, 80)
        xiamiBoard.LED(1, 1, 0)
        basic.pause(1000)
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 120)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 120)
        xiamiBoard.LED(0, 0, 1)
    } else {
        xiamiBoard.LED(0, 1, 1)
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 80)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 80)
    }
})
