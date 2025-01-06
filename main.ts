let _0: Sprite = null
let _1: Sprite = null
let _2: Sprite = null
let _3: Sprite = null
let _4: Sprite = null
let _5: Sprite = null
let _6: Sprite = null
let _7: Sprite = null
let _8: Sprite = null
let _9: Sprite = null
let _10: Sprite = null
let _11: Sprite = null
let _12: Sprite = null
let _13: Sprite = null
let _14: Sprite = null
let _15: Sprite = null
function Trail (Follow: Sprite, Image2: Image, Scale: number) {
    _0 = sprites.create(Image2, SpriteKind.Player)
    _1 = sprites.create(Image2, SpriteKind.Player)
    _1.changeScale(Scale, ScaleAnchor.Middle)
    _2 = sprites.create(Image2, SpriteKind.Player)
    _2.changeScale(Scale * 2, ScaleAnchor.Middle)
    _3 = sprites.create(Image2, SpriteKind.Player)
    _3.changeScale(Scale * 3, ScaleAnchor.Middle)
    _4 = sprites.create(Image2, SpriteKind.Player)
    _4.changeScale(Scale * 4, ScaleAnchor.Middle)
    _5 = sprites.create(Image2, SpriteKind.Player)
    _5.changeScale(Scale * 5, ScaleAnchor.Middle)
    _6 = sprites.create(Image2, SpriteKind.Player)
    _6.changeScale(Scale * 6, ScaleAnchor.Middle)
    _7 = sprites.create(Image2, SpriteKind.Player)
    _7.changeScale(Scale * 7, ScaleAnchor.Middle)
    _8 = sprites.create(Image2, SpriteKind.Player)
    _8.changeScale(Scale * 8, ScaleAnchor.Middle)
    _9 = sprites.create(Image2, SpriteKind.Player)
    _9.changeScale(Scale * 9, ScaleAnchor.Middle)
    _10 = sprites.create(Image2, SpriteKind.Player)
    _10.changeScale(Scale * 10, ScaleAnchor.Middle)
    _11 = sprites.create(Image2, SpriteKind.Player)
    _11.changeScale(Scale * 11, ScaleAnchor.Middle)
    _12 = sprites.create(Image2, SpriteKind.Player)
    _12.changeScale(Scale * 12, ScaleAnchor.Middle)
    _13 = sprites.create(Image2, SpriteKind.Player)
    _13.changeScale(Scale * 13, ScaleAnchor.Middle)
    _14 = sprites.create(Image2, SpriteKind.Player)
    _14.changeScale(Scale * 14, ScaleAnchor.Middle)
    _15 = sprites.create(Image2, SpriteKind.Player)
    _15.changeScale(Scale * 15, ScaleAnchor.Middle)
    _0.follow(Follow)
    _1.follow(_0)
    _2.follow(_1)
    _3.follow(_2)
    _4.follow(_3)
    _5.follow(_4)
    _6.follow(_5)
    _7.follow(_6)
    _8.follow(_7)
    _9.follow(_8)
    _10.follow(_9)
    _11.follow(_10)
    _12.follow(_11)
    _13.follow(_12)
    _14.follow(_13)
    _15.follow(_14)
}
