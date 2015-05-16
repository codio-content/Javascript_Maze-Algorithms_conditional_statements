|||challenge
In this challenge, we have provided you with an event handler `collisionDetected()`. It will get called whenever a collision is detected.

Your job is use `if` and `else if` statements to write a message to the message bar saying what collision took place.

Notice the variable name `entity` being passed to the handler. This contains one of the strings you can see in the table below. 

**Hint:** when testing a string condition, you will use 

```javascript
if (entity == 'lizard') {
  showMessage('You collided with a lizard')
}
```

{check it!! | custom}(test-collision-entity)
|||

| Entity String |
| :- |
| player |
| moster |
| energy |
| goal |

