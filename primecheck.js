isPrime=n=>[...Array(n)].every((_,j)=>n%j||j<2)
// note that this will not work for 0 and 1 as it say it is true and for negative values it will get mad.
// this is just the main part that runs the generator so I thought I would add it.
