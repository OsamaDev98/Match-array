function match_arrays(array1, array2) {
  return array1.length !== array2.length
    ? false
    : array1.every((ele) => {
        return array2.includes(ele);
      });
}
console.log(
  match_arrays(["hello", "there", "wod2"], ["hello", "there", "word2"])
);
