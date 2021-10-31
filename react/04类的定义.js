// es5里面定义类
function Person(name, age, height) {
  this.name = name
  this.age = age
  this.height = height
  console.log(this)
}
let name = "zzzzzzzz"
let age = 12
Person.prototype.run = function () {
  console.log(this.name, this.age)
}
let pre = new Person("zhuzhu", 12, 1444)
console.log(pre.name)
pre.run()
let j = pre.run
console.log(j)
// this没有进行任何形式的绑定但是可以进行显示绑定
j()

// es6里面的类
class Bal {
  // 创建实列时会调用这个方法
  constructor(name, age) {
    this.age = age
    this.name = name
  }
  // 定义方法 转成ES5时相当于在原型上方的方法
  run() {
    console.log(this.name, this.age)
  }

}
const p = new Bal("zzz", 16)
p.run()
// this的绑定题目
const f = p.run
f()