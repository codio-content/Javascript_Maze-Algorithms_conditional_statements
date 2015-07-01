Now it's your turn to make sure that the player moves properly when all the arrow keys are pressed.

|||challenge
Complete the keyboard event handler by making sure all 4 arrow keys are properly handled. 

Use copy and paste rather than typing out the new code from scratch.

Below is a table of keys, their keycodes and the corresponding actions you should call.

{check it!! | custom}(ch-1)

|||

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