// Original function
export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    value = appendString + value;
  }

  return array;
}

// Input array
const inputArray = ['appended', 'fixed', 'displayed'];

// Call the function and store the result
const result = appendToEachArrayValue(inputArray, 'correctly-');

// Log the result to verify
console.log(result);
