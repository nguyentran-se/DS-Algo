/* 1 */
function factorial(num: number) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
// factorial(4);
// console.log("🚀 ~ file: 1_example.ts ~ line 5 ~ factorial(4)", factorial(4))
/* 2 */

let result = [];
function collectOdds(arr: number[]) {
  if (arr.length === 0) return;

  if (arr[0] % 2 !== 0) result.push(arr[0]);

  collectOdds(arr.slice(1));

  return result;
}
// console.log(collectOdds([1, 2, 3, 4, 5, 6]));

/* 2.2 Another version with helper method */

function collectOddsV2(arr: number[]) {
  let result = [];

  function helperCollectOdds(helperArr: number[]) {
    if (helperArr.length === 0) return;

    if (helperArr[0] % 2 !== 0) result.push(helperArr[0]);

    return helperCollectOdds(helperArr.slice(1));
  }

  helperCollectOdds(arr);
  return result;
}

console.log(collectOddsV2([1, 2, 3, 4, 5, 6]));
