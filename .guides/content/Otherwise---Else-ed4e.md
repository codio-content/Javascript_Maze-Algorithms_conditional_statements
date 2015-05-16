So far we have dealt with the case "if a condition is true, then do something".

We are now going to deal with the case "if a condition is true, then do something **otherwise** do something else".

This is actually quite simple. Take a look at the code on the left and you should be able to see what is happening. 

```javascript
if(condition is true {
  do something
}
else {
  do something else
}
```

In our code, we are actually saying "if the key pressed has a key code 123 then move to the right **otherwise** display a message saying 'the right arrow key was not pressed' ".

Notice that the `else` statement comes after the end of the `if () {  }` code block.

Try this out now by pressing the right arrow key or another key and see what happens.