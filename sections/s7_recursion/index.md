# Recursion

## 1. Call Stack

- Func is `pop` from stack

## 2. Helper method recursion

> Main function is not recursive, helper is recursive

- If recursion has some initial variable, consider this.

```ts
let result = []; //we must put this variable here T T
function collectOdds(arr: number[]) {
  if (arr.length === 0) return;

  if (arr[0] % 2 !== 0) result.push(arr[0]);

  collectOdds(arr.slice(1));

  return result;
}
```

```ts
//Another version
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
```
