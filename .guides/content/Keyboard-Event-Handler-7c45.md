Here we go again with another event handler. This time it is a **keyPress** event we are handling.

Look at the code on the left and let's analyse it.

## Handler
This event handler gets called whenever any key is pressed. We are looking to see what key was pressed and if it is one we are interested in, we deal with it.

## You can only move left
Notice that you can only move the player to the left. We will deal with this in a moment.

## keyCode
If you look at the following statement, you can see 

```javascript
if ( keyCode == 'LEFT' ) {
  player.moveLeft()
} 
```


