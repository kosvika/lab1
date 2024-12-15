'use strict';

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

// Тестування функції
console.log(daysInMonth(2, 2024)); // Очікуваний результат: 29 (2024 — високосний рік)
