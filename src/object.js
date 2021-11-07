"use strict";
// 객체 생성하는 3가지 방법

// 객체 리터럴
let obj1 = {};
obj1.name = "Lee";

// Object() 생성자 함수
let obj2 = new Object();
obj2.name = "Lee";

// 생성자 함수
function F() {}
let obj3 = new F();
obj3.name = "Lee";

Function.prototype.method = function (name, func) {
  console.log(this);
  if (!this.prototype[name]) {
    this.prototype[name] = func;
  }
};

function Person(name) {
  // 프로퍼티
  this.name = name;
}

Person.method("getName", () => {
  return this.name;
});

Person.method("setName", (name) => {
  this.name = name;
});

const me = new Person("Raven");

console.log(Person.prototype);

me.setName("Raven");
me.getName();
