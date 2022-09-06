type Result = { [key: string]: number };
const charCount = (str): Result => {
  const result: Result = {};
  for (const char of str) {
    if (/[a-z0-9]/.test(char)) {
      if (result.hasOwnProperty(char)) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
};
/**
 * 1. value in a must has square in s
 * 2. has same frequency
 * 3. {1: 1, 2: 1, 3: 1}, {4: 1, 1: 1, 9: 1}
 * 4. if os[i * i] && oa[i] === os[i * i]
 *    else return false;
 */
const same = (a: number[], s: number[]) => {
  const aCount = charCount(a);
  const sCount = charCount(s);
  for (const k in aCount) {
    const key = +k;
    const square = key * key;
    //  console.log(key, square, sCount[square]);
    if (!sCount[square] || !(aCount[key] === sCount[square])) return false;
  }
  return true;
};
console.log("Result: ", same([1, 2, 3, 2, 5], [4, 9, 1, 4, 11]));
/**
 * 2,2,2,1,2,2,1
 * 2,2,1,2,2,1
 * 2,1,2,2,1
 * 1,2,2,1
 * 
 * 1,2,2,1,2,2,2
 * 1,2,2,1,2,2
 * 1,2,2,1,2
 * 
 * k odd -> pos of k
 * len - pos + 
 * TOTAL = 
 */
