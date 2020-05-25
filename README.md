# Insanely Small Prime Number Generator In JavaScript
I got really bored and made a very tiny JavaScript based prime number generator that prints to the console.

Currently the smallest from what I have seen, but would not be surprised if there is a smaller one.

-----
### The Progression
```javascript
for(i=2;i<100;i++)[...Array(i).keys()].every(x=>i%x!=0||1==x)&&console.log(i)
for(i=2;i<100;i++)[...Array(i).keys()].some(x=>i%x==0&&1!=x)||console.log(i)
for(i=2;i<100;i++)[...Array(i)].some((_,j)=>i%j==0&&1!=j)||console.log(i)
for(i=2;i<100;i++)[...Array(i)].some((_,j)=>(!(i%j))&&j>2)||console.log(i)
for(i=2;i<100;i++)[...Array(i)].some((_,j)=>!(i%j)&&j>2)||console.log(i)
for(i=1;i<100;)[...Array(++i)].some((_,j)=>!(i%j)&&j>1)||console.log(i)
for(i=1;i<100;)[...Array(++i)].every((_,j)=>i%j||j<2)&&console.log(i)
```
-----
Feel free to make Pull requests on upgrades for smaller versions
