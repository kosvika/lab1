'use strict';

/**
 * Розбиває стрічку на слова, видаляючи розділові знаки.
 * @param {string} str - Вхідна стрічка.
 * @returns {Array<string>} - Масив слів.
 */
function splitString(str) {
    if (typeof str !== 'string') {
        throw new Error('Вхідне значення повинно бути стрічкою.');
    }
    const words = str.split(/[\s,.!?;:()]+/).filter(word => word.length > 0);
    return words;
}

// Тестування функції
console.log(splitString("Привіт, світе! Як справи? Це тест."));
