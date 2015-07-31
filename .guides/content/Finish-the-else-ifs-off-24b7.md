
{Check It!|assessment}(test-3935566441)

|||guidance
## Solution

```javascript
function keyPressedEvent(keyCode) {

  if ( keyCode == 'LEFT')  {
    player.moveLeft()
  } 
  else if ( keyCode == 'RIGHT' ) {
    player.moveRight()
  } 
  else if ( keyCode == 'UP' ) {
    player.moveUp()
  } 
  else if ( keyCode == 'DOWN' ) {
    player.moveDown() 
  }   
  else {
    showMessage('None of the arrow keys were pressed')
  }

}
```