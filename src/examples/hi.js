function sayHi(n) {
  let hiArray = [];

  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi';
  }

  return hiArray;
}

console.log(sayHi(5));
