const info = { name: "aaaa", age: "15", body: { height: 14, weight: "1333" } }

//  浅拷贝
const obj = Object.assign({}, info)
console.log(obj)
const obj2 = { ...info }
console.log(obj2)
//  深拷贝
//  方法一
const obj3 = JSON.parse(JSON.stringify(info))
console.log(obj3)
//  
