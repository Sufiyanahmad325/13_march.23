function countWords(text) {
    var words = text.split(" ");
    var wordCountMap = new Map();
  
    // Iterate over each word
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
  
      // Skip empty words
      if (word === "") {
        continue;
      }
  
      // Check if the word already exists in the map
      if (wordCountMap.has(word)) {
        // Increment the count if the word already exists
        var count = wordCountMap.get(word);
        wordCountMap.set(word, count + 1);
      } else {
        // Add the word to the map if it doesn't exist
        wordCountMap.set(word, 1);
      }
    }
  
    return wordCountMap;
  }
  
  // Example usage
  var text = "Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum";
  var result = countWords(text);
  console.log(result);
  