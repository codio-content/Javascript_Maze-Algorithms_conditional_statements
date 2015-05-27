|||guidance
This is quite an advanced concept at this stage, so feel free to skip over this.
|||


A couple of sections back we mentioned why you have to use `==` and not just `=` in an `if` condition test.

The code on the left show what happens if you use `=`. Look at the `if` statement for `keyCode = 'RIGHT'`. We have only one `=`.

## Try the game
If you move the player, you will see that

- nothing happens if you press the left key
- any other key you press moves the player to the right

## Explanation
The reason you see this behavior is that `keyCode = 'RIGHT'` assigns `'RIGHT'` to `keyCode` just as it would with a normal variable assignment. 

Javascript also returns `true` for the condition when you assign a variable value like this. 

## Moving left
Let's say you press the left arrow. Javascript first moves the player left, as `keyCode == 'LEFT'` is true. However, it then goes on to the next `if` statement and now moves it right again, for the reasons we described above, so it appears as if the player has not moved at all.

## Moving right
This works as you would expect.

## Moving up or down
This is really interesting and a bit confusing. You will see that the player moves to the right if you press the up or down key. This is because `keyCode = 'RIGHT'` actually changes the `keyCode` value to `'RIGHT'`, so the `keyCode == 'UP'` and `keyCode == 'DOWN'` are no longer true.
