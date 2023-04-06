input.onButtonPressed(Button.A, function () {
    шар.turn(Direction.Left, 90)
    шар.move(1)
    basic.pause(300)
    шар.move(1)
    basic.pause(300)
    шар.move(1)
    basic.pause(300)
    шар.move(-1)
    basic.pause(300)
    шар.move(-1)
    basic.pause(300)
    шар.move(-1)
    шар.turn(Direction.Right, 90)
})
input.onButtonPressed(Button.AB, function () {
    шар.turn(Direction.Left, 90)
    шар.move(1)
    basic.pause(700)
    шар.move(-1)
    шар.turn(Direction.Right, 90)
})
let sprite: game.LedSprite = null
let шар: game.LedSprite = null
шар = game.createSprite(1, 4)
basic.forever(function () {
    sprite = game.createSprite(4, 4)
    basic.pause(100)
    sprite.turn(Direction.Right, 180)
    for (let index = 0; index < 4; index++) {
        sprite.move(1)
        basic.pause(500)
        if (sprite.isTouching(шар)) {
            game.gameOver()
        }
    }
    if (sprite.isTouchingEdge()) {
        sprite.delete()
        game.addScore(1)
    }
})
