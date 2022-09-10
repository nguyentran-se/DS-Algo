function sameFrequency(n1: number, n2: number) {
  const n1s = n1 + "";
  const n2s = n2 + "";
  if (n1s.length !== n2s.length) return false;
  let freq = {};
  for (let i = 0; i < n1s.length; i++) {
    const number = n1s[i];
    const number2 = n2s[i];
    freq[number] = freq[number] ? ++freq[number] : 1;
    freq[number2] = freq[number2] ? --freq[number2] : -1;
  }

  console.log(freq);
  for (let i = 0; i < n1s.length; i++) {
    const element = n1s[i];
    if (freq[element] !== 0) return false;
  }
  return true;
}
// sameFrequency(182, 281);

//2. areThereDuplicates
function areThereDuplicates(...args: any[]) {
  let start = 0,
    end = 1;
  while (end < args.length) {
    if (args[start] !== args[end]) {
      start++;
      args[start] === args[end];
    } else return true;
    end++;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 1));
