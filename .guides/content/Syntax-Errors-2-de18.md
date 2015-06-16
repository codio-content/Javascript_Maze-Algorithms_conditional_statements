|||challenge
Here is some more broken code that is a bit harder to fix.

Make sure that your player moves in all directions. Just getting rid of the syntax errors is not enough!

{check It!! | custom}(ch-3)
|||

|||guidance
## Solution
There are two things wrong with this code.

Firstly, there is a `)` missing after `LEFT`

```javascript
if ( keyCode == 'LEFT'  {
  player.moveLeft()
} 
```

Secondly, we have `=` instead of `==`
```javascript
if ( keyCode = 'RIGHT' ) {
  player.moveRight()
} 
```

|||

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
