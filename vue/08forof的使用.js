let arr = [1, 3, 4, 5, 6, 7]
let obj = { 0: "asda", 1: "asdasd", 2: "sdadasdasd", length: 3 }

let obj2 = Array.from(obj)
console.log(obj2)
for (let item of arr) {
  console.log(item)
}
for (let item of obj2) {
  console.log(item)
}