'use strict';

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = arr.filter(item => item < pivot);
    const right = arr.filter(item => item > pivot);
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Тестування функції
console.log(quickSort([3, 1, 4, 1, 5, 9, 2, 6, 5])); // Очікуваний результат: [1, 1, 2, 3, 4, 5, 5, 6, 9]
