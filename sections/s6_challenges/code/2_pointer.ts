//6. ex5
const averagePair = (arr: number[], average: number) => {
  let checkSum = average * 2;
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === checkSum) {
      return true;
    } else if (sum > checkSum) --right;
    else ++left;
  }
  return false;
};
// console.log(averagePair([1, 2, 3], 2.5));

// 6. ex6
function isSubsequence(sub, str) {
  const len = str.length;
  const limit = sub.length;
  let next = 0;
  for (let start = 0; start < len; start++) {
    if (sub[start] === str[next]) ++next;
    console.log(next);
    if (next >= limit) return true;
  }

  return false;
}
console.log(isSubsequence("abc", "acb"));
