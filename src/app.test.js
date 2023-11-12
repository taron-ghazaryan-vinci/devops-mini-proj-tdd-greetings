/* eslint-disable no-undef */
const greet = require('./app')

test('greet should return "Hello, Jean-Kevin" when given Jean-Kevin', () => {
  expect(greet('Jean-Kevin')).toBe('Hello, Jean-Kevin')
})
