function bubbleSort(numeros) {
  const arr = [...numeros];

  for (let vuelta = 0; vuelta < arr.length - 1; vuelta++) {
    for (let i = 0; i < arr.length - 1 - vuelta; i++) {
      if (arr[i] > arr[i + 1]) {
        const temporal = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temporal;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([5, 2, 9, 1, 7])); // [1, 2, 5, 7, 9]
console.log(bubbleSort([3, 3, 2, 1]));    // [1, 2, 3, 3]
console.log(bubbleSort([]));              // []
console.log(bubbleSort([7]));             // [7]