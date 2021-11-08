"use strict";
// function Person(name, age, job) {
//     this.name = name
//     this.age = age
//     this.job = job
//     // this.resume = function () {
//     //     console.log(this.name, this.age, this.job)
//     //     this.greeting = function () {
//     //         console.log(`I'm ${this.name} nice to meet u!`)
//     //     }
//     //     return this.greeting();
//     // }
// }

// // 일반 함수의 경우 this가 window로 바인딩되는 반면
// // 생성자 함수는 새로 생성된 빈 객체에 바인딩 된다.

// Person.prototype.resume = function () {
//     console.log(this.name, this.age, this.job)
//     this.greeting = () => {
//         console.log(`I'm ${this.name} nice to meet you!!`)

//     }

//     return this.greeting
// }

// const me = new Person('Raven', 29, 'Front-end programmers')
// const you = new Person('Parrot', 31, 'Software engineer')

// // console.log(me.resume())

// // 생성자 함수.prototype.method를 설정하여 공통된 메소드를 prototype에 정의 하여 메모리 누수를 최소화 시킨다.
// console.log(you.resume().greeting)


class Person {
    constructor(name, age, job) {
        this.name = name
        this.age = age
        this.job = job
    }

    resume() {
        const greeting = () => {
            return `Hi! My name is ${this.name}`
        }
        return greeting
    }
}

const me = new Person('Raven', 29, 'Front-end programmer')

// console.log(me.resume().greeting) 
// console.log(me.resume()()) // 함수 자체를 넘겨서 이게 가능하다...
// 왜지??

