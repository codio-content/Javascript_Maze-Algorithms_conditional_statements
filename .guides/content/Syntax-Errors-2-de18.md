
{Check It!|assessment}(test-3849268210)

|||guidance
## Solution

There are two things wrong with this code.

Firstly, there is a `)` missing after `LEFT`

Secondly, we have `=` instead of `==`

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
