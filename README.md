# Insanely Small Prime Number Generator In JavaScript
I got really bored and made a very tiny JavaScript based prime number generator that prints to the console.

Currently the smallest from what I have seen, but would not be surprised if there is a smaller one.

-----
### Progression
```javascript
for(i=2;;i++)if([...Array(i).keys()].every(x=>i%x!=0||1==x))console.log(i) // 74
for(i=2;;i++)[...Array(i).keys()].every(x=>i%x!=0||1==x)&&console.log(i) // 72
for(i=2;;i++)[...Array(i).keys()].some(x=>i%x==0&&1!=x)||console.log(i) // 71
for(i=2;;i++)[...Array(i)].some((_,j)=>i%j==0&&1!=j)||console.log(i) // 68 
for(i=2;;i++)[...Array(i)].some((_,j)=>(!(i%j))&&j>2)||console.log(i) // 69
for(i=2;;i++)[...Array(i)].some((_,j)=>!(i%j)&&j>2)||console.log(i) // 67
for(i=1;;)[...Array(++i)].some((_,j)=>!(i%j)&&j>1)||console.log(i) // 66
for(i=1;;)[...Array(++i)].every((_,j)=>i%j||j<2)&&console.log(i) // 64
for(i=2;;i++){for(j=2;i%j!=0;j++){}i==j&&console.log(i)} // 56 - Switched up my stategy on the second day I looked at this. I'm sad that this doesn't use as many fancy tricks now though.
for(i=2;;i++){for(j=2;i%j;j++){}i==j&&console.log(i)} // 53
for(i=2;;i++){for(j=2;i%j;j++){}i>j||console.log(i)} // 52
for(i=2;;i++){for(j=2;i%j++;){}i>j||console.log(i)} // 51
for(i=2;;i++){for(j=2;i%j++;);i>j||console.log(i)} // 50
```
-----
### Explanation (For old version)
All the tricks I used.

```javascript
for(i=1;;)[...Array(++i)].every((_,j)=>i%j||j<2)&&console.log(i)
```
The for loop feeds i values into the prime checker where it starts with a value of 1 (besides the typical 2). Then an array is created with the size of i + 1 using the ++i. It uses ++i so that i is incremented by 1 to save a character by not having it in the for loop header. Since the ++i is used that is why the for loop starts a 1. The array that is created is full of empty values and with the empty values the every function does not work as it just skips empty values, so to convert into something that would work it uses the spread operator then formed back into an array, and by my luck (for the most part) it converted to an array with undefined values instead of empty ones. Now the every function worked on it. The every function just loops through each element and runs a conditional function and checks that each value is true and return true else it returns false (very handy). The arrow function in the every function skips the first argument since it is just the value which would be undefined every where and the second argument is conveniently the index. The index will have a values of `[0:i)` so to check if is prime is must be divisible by only 1 and itself so what has to be checked is that everything from `(1:i)` or `[2:i-1]` and to keep it in that range the simple less than operation is used for the index. Then to check that each index is not evenly divisible to the checked number a simple modulus expression is used, but to save a few characters instead of checking if is equal 0 it checks if is true or false in a sense and since 0 is false and anything else is true. If is false so i % j = 0 then the number is not prime and the every function evaluates to false. Then a handy trick is used with && so that when the prime checker result true it will then move onto the next part of the boolean statement to check its truthy value and in doing so run the console log function. Then on the other hand if the prime checker returns false it will not need to check if the next statement is true since it is an AND operation if it false somewhere it must be false in total.

I know the explanation was wordy and probably has typos and grammatical mistakes, but this was all for fun and I hope that it maybe taught you something new, because in the fews hours I spent on this I sure did. (I learned that I should ever do something like this again, because it is pointless.)

-----
### Explanation
The new method is a lot smaller when I worked on this the next day, but it is a lot less satisfying since it doesn't use as many tricks, but I guess the basics really can not be beaten.
```javascript
for(i=2;;i++){for(j=2;i%j++;);i>j||console.log(i)}
```
The main part of this is the conditional in the nested for loop. Since it does i%j it checks if it evaluates to 0 which would be a falsy value. Then the loop will break and if the value of j is equal to i then, i must be a prime number. So to make it shorter it uses a few tricks with greater than instead of equal for search the space it would never reach then inverting with a NOT instead of an AND. Better explanation of the NOT and AND trick is in previous explanation. Then other trick is the j++ which just helps save a character.

-----
### Motivation
Why did I do this? (Because I am dumb and had something better to do and I just didn't know what that was)

and this

![Image of Discord Conversation](https://i.imgur.com/0ctULZm.png)

-----
### Extra

I posted this to reddit and someone mentioned https://codegolf.stackexchange.com/questions/70001/list-prime-numbers which the rules are very different (mainly because I made up my own rules), but it is for making a function that returns an array of size n with n being a passed positive integer.

The solution for JavaScript was (https://codegolf.stackexchange.com/a/70043/95415):
```javascript
n=>{for(p=[],i=2;n;i++)!p.some(c=>!(i%c))&&p.push(i)&&n--;return p} // 67
```

Which I shortened to:
```javascript
n=>{a=[];for(i=2;n;i++)a.every(j=>i%j)&&n--|a.push(i);return a} // 63
```

Then made another verision that returns all primes in an array under the value n:
```javascript
n=>{for(a=[],i=2;i<n;i++)a.every(j=>i%j)&&a.push(i);return a} // 61
```

-----
Feel free to make Pull requests on upgrades for a better prime number generator
