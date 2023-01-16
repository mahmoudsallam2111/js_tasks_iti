function* fibonacci(size) {
  const flag = !size && size !== 0;
  let current = 0;
  let next = 1;

  while (flag || size--) {
    yield current;
    [current, next] = [next, current + next];
  }
}

let arr = [...fibonacci(10)];
console.log(arr);

/// 1 -[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//2-[]
