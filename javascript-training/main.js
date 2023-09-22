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


console.log(todos[1].text)