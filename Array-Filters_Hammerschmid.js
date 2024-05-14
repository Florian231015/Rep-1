/* Florian Hammerschmid */
let numbers = new Array(100);

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = Math.floor(Math.random() * (1000 - 2 + 1)) + 2;
}


function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false; 
    }
    return true; 
}

let primes = numbers.filter(isPrime);

primes.sort((a, b) => a - b);

console.log(primes);
