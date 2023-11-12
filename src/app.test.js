/* eslint-disable no-undef */
const greet = require('./app')

test('greet should return "Hello, Jean-Kevin" when given Jean-Kevin', () => {
  expect(greet('Jean-Kevin')).toBe('Hello, Jean-Kevin')
})

test('greet should return  "Hello, my friend" when nothing is given ', () => {
  expect(greet('  ')).toBe('Hello, my friend')
  expect(greet()).toBe('Hello, my friend')
  expect(greet(null)).toBe('Hello, my friend')
})
