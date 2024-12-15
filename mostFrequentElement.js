'use strict';

function mostFrequentElement(arr) {
    const frequency = {};
    arr.forEach(item => {
        frequency[item] = (frequency[item] || 0) + 1;
    });

    let maxFreq = 0;
    let mostFrequent = null;
    for (const [item, freq] of Object.entries(frequency)) {
        if (freq > maxFreq) {
            maxFreq = freq;
            mostFrequent = item;
        }
    }

    return mostFrequent;
}

// Тестування функції
console.log(mostFrequentElement([1, 2, 3, 2, 3, 3])); // Очікуваний результат: 3
