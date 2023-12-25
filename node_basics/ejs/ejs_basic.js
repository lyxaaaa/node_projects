const ejs = require('ejs')
const fs = require('fs')

let greeting = 'hello '
let user = 'betty'
let description = 'nice weather'
//来个循环
let fruits = ['orange', 'watermelon', 'apple', 'grape']

let str = fs.readFileSync(__dirname + '/ejs_basic.html').toString()

let result = ejs.render(str, {user: user, description, fruits})
console.log(result)