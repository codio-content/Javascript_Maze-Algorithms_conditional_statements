`else if` is the final piece of the `if` jigsaw.  What we are doing here is to say 

> - if the left arrow is pressed move left
> - otherwise, if the right arrow is pressed, move right
> - otherwise, display a message

Notice that the final `else` statement is the catch all when none of the other conditions have been met.

## Flow
The way Javascript flows through the `if / else if / else` statements is as follows.

- If any of the `if` or `else if` conditions are true then the associated code block will be executed. After that block has executed, it will jump past any remaining `if`, `else if` or `else` statements and continue executing from there.
- If none of the `if` or `else if` conditions are true then the `else` code block will execute.

