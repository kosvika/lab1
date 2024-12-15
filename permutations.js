'use strict';

function getPermutations(word) {
    if (word.length === 1) return [word];
    const permutations = [];
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        const remainingChars = word.slice(0, i) + word.slice(i + 1);
        const remainingPermutations = getPermutations(remainingChars);
        remainingPermutations.forEach(perm => permutations.push(char + perm));
    }
    return permutations;
}

// Тестування функції
console.log(getPermutations("abc"));
