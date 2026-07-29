function reverseArray<T>(arr: T[]): T[] {
  // Generic type
  return arr.reverse();
}
const arr = [1, 2, 3];
const reversed = reverseArray(arr);

console.log(reversed);
console.log(arr === reversed); // true
