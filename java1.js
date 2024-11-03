let math = {
    sun: function sum(f1, f2) {
        console.log(f1 + f2);
    },
    fib: function fibonacci(n) {
        if (n <= 1) {
            return n;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    },
    fibSequence: function (n) {
        for (let i = 0; i < n; i++) {
            console.log(fibonacci(i));
        }
    },

    fact: function factorial(n) {
        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    },
    factSequence: function (n) {
        for (let i = 0; i <= n; i++) {
            console.log(i + "! = " + this.fact(i));
        }
    }
};


let n = 10;
console.log("Fib result:");
math.fibSequence(n);

console.log("Fact result:");
math.factSequence(n);
