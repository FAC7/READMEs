function example() {
  return "example";
}

function double(arr){
    return arr.map(function(n){return n*2;});
}

function isPrime(n){
   if (n < 2) {return false}
   if (n != Math.round(n)) {return false}
   var isPrime = true;
   for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {isPrime = false}
   }
   return isPrime;
}
