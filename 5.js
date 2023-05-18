function findMinMax(numbers) {
    var max = Math.max(...numbers);
    var min = Math.min(...numbers);
    return { max, min };
  }
  
  // Example usage
  var numbers = [5, 2, 7, 1, 9];
  var result = findMinMax(numbers);
  console.log(result);
  