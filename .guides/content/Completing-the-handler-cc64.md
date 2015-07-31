Now it's your turn to make sure that the player moves properly when all the arrow keys are pressed.

{Check It!|assessment}(test-1697497471)

| Key | keyCode | Action
|-|:-:|:-:|
| Up Arrow | UP | player.moveUp() |
| Down Arrow | DOWN | player.moveDown() |
| Left Arrow | LEFT | player.moveLeft() |
| Right Arrow | RIGHT | player.moveRight() |

|||guidance
## Solution

```javascript
function keyPressedEvent(keyCode) {

  if ( keyCode == 'LEFT' ) {
    player.moveLeft()
  } 
  if ( keyCode == 'RIGHT' ) {
    player.moveRight()
  } 
  if ( keyCode == 'UP' ) {
    player.moveUp()
  } 
  if ( keyCode == 'DOWN' ) {
    player.moveDown()
  }
  
}
```

|||