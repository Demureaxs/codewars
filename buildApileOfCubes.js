function findNb(m) {
  let count = 1;
  let temp = m;

  if (m <= 0) return -1;
  while (temp > 0 && temp !== 0) {
    temp -= Math.pow(count, 3);
    count++;
  }

  return temp === 0 ? count - 1 : -1;
}
