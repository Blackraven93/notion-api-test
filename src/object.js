"use strict";
// 객체 생성하는 3가지 방법

// 객체 리터럴
let obj1 = {};
obj1.name = "Lee";

// Object() 생성자 함수
let obj2 = new Object();
obj2.name = "Lee";

// 생성자 함수
function F() { }
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

// array와 object 언제 사용하는게 좋을까?
/*
  1. 순서가 필요한가 ? array : Object;

  2. 각각 구분 지을 수 있는 key 값이 존재하냐(의미를 가지냐) ? Object : array;
    - ex) 하의 = [신발, 바지], 의류 = {상의:[셔츠, 니트, 코트], 하의:[바지, 신발]}
*/