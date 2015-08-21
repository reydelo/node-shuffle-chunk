function shuffle(array) {
  var counter = array.length, temp, index;
  while (counter > 0) {
      index = Math.floor(Math.random() * counter);
      counter--;
      temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }
  return array;
}

function chunk(shuffledArray, size) {
  var chunks = [],
      i = 0,
      n = shuffledArray.length,
      num = n/size;
  while (i < n) {
    chunks.push(shuffledArray.slice(i, i += num));
  }
  return chunks;
}

function shuffleChunk(inputArray, num) {
  var shuffledArray = shuffle(inputArray);
  return chunk(shuffledArray, num);
}

var inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(shuffleChunk(inputArray, 4));
