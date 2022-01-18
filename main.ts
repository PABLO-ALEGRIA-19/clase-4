controller.right.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(mySprite, 100, 100)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    controller.moveSprite(mySprite, 20, 100)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a 1 1 1 1 1 a a a a 1 1 1 1 1 a 
    a 1 f f f 1 a a a a 1 f f f 1 a 
    a 1 f f f 1 a a a a 1 f f f 1 a 
    a 1 f f f 1 a a a a 1 f f f 1 a 
    a 1 1 1 1 1 a a a a 1 1 1 1 1 a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a f f 1 1 1 f f f f 1 1 1 f f a 
    a f f 1 1 1 f f f f 1 1 1 f f a 
    a f f 1 1 1 f f f f 1 1 1 f f a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
forever(function () {
    info.setScore(controller.dy())
})
