// Напишите функцию JavaScript для поиска
// первого неповторяющегося символа.

function firstUniqChar(s) {
    let arr = {};
    for (let i = 0; i < s.length; i++) {
        if (!arr[s[i]]) {
            arr[s[i]] = 1;
        } else {
            arr[s[i]]++;
        }
    }

    for (let symbol in arr) {
        if (arr[symbol] === 1) {
            return symbol;
        }
    }

    return null;
}

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("lleettccooddee"));
