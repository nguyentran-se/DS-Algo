//6. ex7: find maxSubsum;
const maxSubarraySum = (arr: number[], n: number) => {
  const len = arr.length;
  if (n > len) return null;
  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  let temp = maxSum;
  for (let i = n; i < len; i++) {
    temp = temp + arr[i] - arr[i - n];
    maxSum = Math.max(temp, maxSum);
  }
  return maxSum;
};

//6. ex8: find min length of subarray > number
/**
 *
 * @param arr array
 * @param n min sum;
 * @returns min length of sub array has total > n
 * @implements slide windown until > n, then omit
 * first ele and plus last until ele to the end of array. update
 * minLength after each total >= n
 */
const minSubarrayLength = (arr: number[], n: number) => {
  const len = arr.length;
  let start = 0;
  let end = 0;
  let minLength = Infinity;
  let total = 0;
  while (start < len) {
    if (total < n && end < len) {
      total += arr[end];
      ++end;
    } else if (total >= n) {
      minLength = Math.min(minLength, end - start);
      total -= arr[start];
      ++start;
    } else {
      break;
    }
  }
};
minSubarrayLength([2, 3, 1, 2, 4, 3], 7);

/**
 *
 * @param str string input
 * @returns longest substring has distinct character
 * @implements update longest after every character.
 * if meet duplicate then move start after that character
 */
const findLongestSubstring = (str: string) => {
  const seen: any = {};
  let start = 0;
  let longest = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);

    seen[char] = i + 1;
  }
  return longest;
};
