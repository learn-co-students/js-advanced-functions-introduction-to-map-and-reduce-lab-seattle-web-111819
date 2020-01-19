// Your code here
const mapToNegativize = arr => arr.map(ele => 0 - ele)
const mapToNoChange = arr => arr.map(ele => ele)
const mapToDouble = arr => arr.map(ele => ele * 2)
const mapToSquare = arr => arr.map(ele => ele ** 2)

const reduceToTotal = (arr, i=0) => arr.reduce((m, n) => m + n, i)
const reduceToAllTrue = arr => arr.reduce((m, n) => m && n ? true : false, true)
const reduceToAnyTrue = arr => arr.reduce((m, n) => m || n ? true : false, false)