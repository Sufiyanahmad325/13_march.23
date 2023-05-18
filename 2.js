function removeDuplicates(numbers) {
    var uniqueSet = new Set(numbers);
    return Array.from(uniqueSet);
  }
  
  // Example usage
  var numbers = [1, 2, 3, 4, 2, 3, 5, 6, 4, 7];
  var result = removeDuplicates(numbers);
  console.log(result);
  