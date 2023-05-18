function extractElements(arr) {
    var [first, second, ...rest] = arr;
    var last = rest.pop();
    return [first, second, last];
  }
  
  // Example usage
  var numbers = [1, 2, 3, 4, 5];
  var result = extractElements(numbers);
  console.log(result);
  