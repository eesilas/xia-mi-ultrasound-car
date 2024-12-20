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
    if (distance < 65) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, 80)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, 80)
        basic.pause(500)
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 80)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, 80)
        basic.pause(500)
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 80)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 80)
    } else {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 80)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 80)
    }
})
