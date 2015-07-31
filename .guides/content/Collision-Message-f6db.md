
{Check It!|assessment}(test-1787752360)

|||guidance
## Solution
```javascript
function collisionEvent(type) {

  if ( type == 'wall') {
    showMessage('You hit a wall')
  }
  else if ( type == 'monster') {
    showMessage('You hit a monster')
  }
  else if ( type == 'energy') {
    showMessage('You hit some energy')
  }
  else if ( type == 'goal') {
    showMessage('You reached the exit')
  }

}
```
|||