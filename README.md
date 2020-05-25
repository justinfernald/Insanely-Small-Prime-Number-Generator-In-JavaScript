# Insanely Small Prime Number Generator In JavaScript
I got really bored and made a very tiny JavaScript based prime number generator that prints to the console.

Currently the smallest from what I have seen, but would not be surprised if there is a smaller one.

-----
### Progression
```javascript
for(i=2;;i++)[...Array(i).keys()].every(x=>i%x!=0||1==x)&&console.log(i)
for(i=2;;i++)[...Array(i).keys()].some(x=>i%x==0&&1!=x)||console.log(i)
for(i=2;;i++)[...Array(i)].some((_,j)=>i%j==0&&1!=j)||console.log(i)
for(i=2;;i++)[...Array(i)].some((_,j)=>(!(i%j))&&j>2)||console.log(i)
for(i=2;;i++)[...Array(i)].some((_,j)=>!(i%j)&&j>2)||console.log(i)
for(i=1;;)[...Array(++i)].some((_,j)=>!(i%j)&&j>1)||console.log(i)
for(i=1;;)[...Array(++i)].every((_,j)=>i%j||j<2)&&console.log(i)
```
-----
### Explanation
All the tricks I used.

```javascript
for(i=1;;)[...Array(++i)].every((_,j)=>i%j||j<2)&&console.log(i)
```
The for loop feeds i values into the prime checker where it starts with a value of 1 (besides the typical 2). Then an array is created with the size of i + 1 using the ++i. It uses ++i so that i is incremented by 1 to save a character by not having it in the for loop header. Since the ++i is used that is why the for loop starts a 1. The array that is created is full of empty values and with the empty values the every function does not work as it just skips empty values, so to convert into something that would work it uses the spread operator then formed back into an array, and by my luck (for the most part) it converted to an array with undefined values instead of empty ones. Now the every function worked on it. The every function just loops through each element and runs a conditional function and checks that each value is true and return true else it returns false (very handy). The arrow function in the every function skips the first argument since it is just the value which would be undefined every where and the second argument is conveniently the index. The index will have a values of `[0:i)` so to check if is prime is must be divisible by only 1 and itself so what has to be checked is that everything from `(1:i)` or `[2:i-1]` and to keep it in that range the simple less than operation is used for the index. Then to check that each index is not evenly divisible to the checked number a simple modulus expression is used, but to save a few characters instead of checking if is equal 0 it checks if is true or false in a sense and since 0 is false and anything else is true. If is false so i % j = 0 then the number is not prime and the every function evaluates to false. Then a handy trick is used with && so that when the prime checker result true it will then move onto the next part of the boolean statement to check its truthy value and in doing so run the console log function. Then on the other hand if the prime checker returns false it will not need to check if the next statement is true since it is an AND operation if it false somewhere it must be false in total.

I know the explanation was wordy and probably has typos and grammatical mistakes, but this was all for fun and I hope that it maybe taught you something new, because in the fews hours I spent on this I sure did. (I learned that I should ever do something like this again, because it is pointless.)

-----
### Motivation
Why did I do this? (Because I am dumb and had something better to do and I just didn't know what that was)

and this

![Image of Discord Conversation](https://i.imgur.com/0ctULZm.png)

-----
Feel free to make Pull requests on upgrades for a better prime number generator
