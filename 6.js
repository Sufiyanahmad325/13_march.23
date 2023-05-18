function extractPersonInfo(person) {
    var { name, address: { street } } = person;
    return { name, street };
  }
  
  // Example usage
  var person = {
    name: "John Doe",
    address: {
      street: "123 Main Street",
      city: "Cityville",
      state: "State"
    },
    age: 30
  };
  
  var result = extractPersonInfo(person);
  console.log(result);
  