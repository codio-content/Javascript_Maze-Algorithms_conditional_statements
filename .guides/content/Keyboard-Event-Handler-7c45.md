Here we go again with another event handler. This time it is a **keyPress** event we are handling.

Look at the code on the left and let's analyse it.

## Handler
This event handler gets called whenever any key is pressed. We are looking to see what key was pressed and if it is one we are interested in, we deal with it.

## keyCode
If you look at the following statement, you can see 

```javascript
if (keyCode == 123) {
  movePlayer(UP)
}
```

This is saying "If the key code of the key pressed is equal to 123, move the player up".

So, each key on the keyboard has a value that is passed to our `keyPress()` event. The codes we are interested in are

| Key | keyCode |
|-|:-:|
| Up Arrow | 123 |
| Down Arrow | 124 |
| Left Arrow | 125 |
| Right Arrow | 126 |

