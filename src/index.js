module.exports = function check(str, bracketsConfig) {
  let arr = [];
  const openBrackets = new Set();
  const closeBrackets = {};
    
  for (const pair of bracketsConfig) {
    openBrackets.add(pair[0]);
    closeBrackets[pair[1]] = pair[0];
}

for (const char of str) {
    if (openBrackets.has(char)) {
        if (arr.length > 0 && arr[arr.length - 1] === char && char === closeBrackets[char]) {
          arr.pop();
        } else {
          arr.push(char);
        }
    } else if (char in closeBrackets) {
        if (arr.length === 0 || arr.pop() !== closeBrackets[char]) {
            return false;
        }
    } else {
        return false;
    }
}

  return arr.length === 0;
}
