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

test('greet should return "HELLO, JEAN-KEVIN!" when given JEAN-KEVIN', () => {
  expect(greet('JEAN-KEVIN')).toBe('HELLO, JEAN-KEVIN!')
  expect(greet('JEAN-KEVIn')).toBe('Hello, JEAN-KEVIn')
})
