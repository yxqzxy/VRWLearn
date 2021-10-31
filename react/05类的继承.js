// 面向对象语言的特点 继承、多态、封装
// 继承：1，减少重复的代码 2，多态的前提（鸭子类型）
// class的肌层一定要使用super
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  run() {
    console.log(this.name, this.age)
  }
}
class Studen extends Person {
  constructor(name, age, son) {
    super(name, age)
    this.son = son
  }
}
let stu = new Studen("zhuzhu", "age", "nam")
stu.run()