'use strict';

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Тестування функції
console.log(factorial(5)); // Очікуваний результат: 120
