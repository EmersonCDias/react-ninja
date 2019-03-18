export default (arr, func) => {
  let newArr = arr.map((item, index) => func(item, index))

  // for (let i = 0; i < arr.length; i++) {
  //   newArr.push(func(arr[i], i))
  // }

  return newArr
}
