scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    if (controller.A.isPressed()) {
        timer.throttle("chop", 1000, function () {
            wood += 1
        })
        guy.sayText(wood)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (tiles.tileAtLocationEquals(guy.tilemapLocation(), sprites.builtin.forestTiles0)) {
    	
    }
})
let wood = 0
let guy: Sprite = null
tiles.setCurrentTilemap(tilemap`test`)
guy = sprites.create(assets.image`Guy1`, SpriteKind.Player)
guy.setScale(2, ScaleAnchor.Middle)
controller.moveSprite(guy)
wood = 0
scene.cameraFollowSprite(guy)
