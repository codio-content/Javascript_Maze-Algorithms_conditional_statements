```javascript
if ( keyCode == 'LEFT' ) {
  player.moveLeft()
} 
```

You are probably asking yourself why we have to use `==` and not just `=`.

The reason is a bit complicated for now, but if you used `=` then it would assign the value `LEFT` to `keyCode` rather than testing to see if it is true or not.

## Just use == in an if statement
For now, don't worry about why, just be sure to use `==` in your `if` statements.

