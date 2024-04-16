export default function cleanSet(set, startString) {
    const arr = [];
    if (startString && typeof startString === 'string') {
      for (const ele of set) {
        if (ele.startsWith(startString)) {
          arr.push(ele.slice(startString.length));
        }
      }
      return arr.join('-');
    }
    return '';
}
