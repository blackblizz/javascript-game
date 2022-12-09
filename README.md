
# The Memory Game


## How to play?

Squares will start to blink once the player hit any key on the keyboard. In each round a random square will blink and player will have to memorize the sequence and click the squares in the correct order to enter next round.  
&nbsp;  


## How I made the squares start blinking?

Using .addEventListener("keydown"), game will be triggered when a key on the keyboard is pressed. It will then bring us to the generate() function in which a random square will be selected and blink. At the same time, the record of blinked square is stored in the correctAnswer[] array.  
&nbsp;  

## How to compare the player's sequence to the correct sequence?
Using a for each loop, whenever a square is selected by the player, the play() function will be triggered. In this function, we compare the .activeElement.id (meaning the square that the player just clicked) to the correctAnswer[] array. When the number of clicks equals to the length of the correctAnswer[] array, the function will stop comparing the answer and move on to reset the index to 0 and run the generate() function again.  
&nbsp;  

## What happen if the player's sequence does not match the correct sequence?
As written in the second part of the play() function, the whole game will restart in 3 seconds.