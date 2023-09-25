// DOM ONLY

/*
// single element
const form = document.getElementById('my-form')
console.log(form)
console.log(document.querySelector('h1'))

// multiple elements
console.log(document.querySelectorAll('.item'))
console.log(document.getElementsByClassName('.item'))
console.log(document.getElementsByTagName('li'))


const items = document.querySelectorAll('.item')

items.forEach((item) => console.log(item))
*/

const ul = document.querySelector('.items')

ul.firstElementChild.textContent = 'Hello'
ul.children[1].innerText = 'Brad'
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'























































































// CONSOLE ONLY

/* 

// Data Types
const name = 'John'
const age = 30

// Concatenation
console.log('My name is '+ name + ' and I am '+ age)

// Template String
const hello = 'My name is '+ name + 'and I am '+ age

// Properties
const s = 'Hello World'
console.log(s.length)
console.log(s.toUpperCase())
console.log(s.toLowerCase())

// Arrays
const numbers = new Array(1,2,3,4,5)
const fruits = ['apples','oranges', 'pears', 10, true]

// replace value with index
fruits[3] = 'grapes'

// last array
fruits.push('mangos')

// first array
fruits.unshift("strawberries")

fruits.pop()

console.log(fruits)

*/


/*
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

const {firstName, lastName, address: {city}} = person

console.log(city)

*/

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with Boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist Appointment',
        isCompleted: false
    },
]

// const todoJSON = JSON.stringify(todos)
// console.log(todoJSON)

/*
// For Loop
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// While Loop
let i = 0

while(i < 10){
    console.log(i)
    i++
}

*/

/*
// forEach, map, filter
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true
}).map(function(todo){
    return todo.text
})

console.log(todoCompleted)
*/


/*
const x = 10

// non strict in type
if (x == 10) {
    console.log('x is 10')
}

// strict in type int to int
if (x === 10) {
    console.log('x is 10')
}
*/


/*
// ternary
const y = 11

const color = y > 10 ? 'red' : 'blue'

switch (color) {
    case 'red':
        console.log('color is red')
        break;
    case 'blue':
        console.log('color is blue')
    default:
        console.log('color is not red or blue')
        break;
}
*/

/*
// functions // arrow functions
const addNums = (num1 = 1, num2 = 1) => num1 + num2
console.log(addNums(5, 5))
*/

/*
// OOP ES5
// constructor function
function Person(firstName, lastName, dob){
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)

    // this.getBirthYear = function(){
    //     return this.dob.getFullYear()
    // }

    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}

Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear()
}

// instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980')
const person2 = new Person('Mary', 'Anne', '4-3-2000')

console.log(person2.getBirthYear())
console.log(person1)
*/


/*
// OOP ES6 / Syntactic Sugar
// class
class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }

    getBirthYear(){
        return this.dob.getFullYear()
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

// instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980')
const person2 = new Person('Mary', 'Anne', '4-3-2000')

console.log(person2.getBirthYear())
console.log(person1)
*/

