function swapValues(x, y) {
    [x, y] = [y, x];
    return [x, y];
  }
  
  // Example usage
  var a = 5;
  var b = 10;
  var result = swapValues(a, b);
  console.log(result);
  