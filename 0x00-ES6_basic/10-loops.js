export default function appendToEachArrayValue(array, appendString) {
  const earray = [];
  for (const value of array) {
    earray.push(appendString + value);
  }

  return earray;
}
