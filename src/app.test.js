/* eslint-disable no-undef */
const greet = require('./app')

test('greet should return "Hello, Jean-Kevin" when Jean-Kevin is given', () => {
  expect(greet('Jean-Kevin')).toBe('Hello, Jean-Kevin')
})

test('greet should return  "Hello, my friend" when nothing is given ', () => {
  expect(greet('  ')).toBe('Hello, my friend')
  expect(greet()).toBe('Hello, my friend')
  expect(greet(null)).toBe('Hello, my friend')
})

test('greet should return "HELLO, JEAN-KEVIN!" when JEAN-KEVIN is given', () => {
  expect(greet('JEAN-KEVIN')).toBe('HELLO, JEAN-KEVIN!')
  expect(greet('JEAN-KEVIn')).toBe('Hello, JEAN-KEVIn')
})

test('greet should return "Hello, Kratos and Thanathos." when ["Kratos", "Thanathos"] is given', () => {
  const twoNames = ['Kratos', 'Thanathos']
  expect(greet(twoNames)).toBe('Hello, Kratos and Thanathos.')
})

test('greet should return "Hello, Kratos, Thanathos and Hypnos." when ["Kratos", "Thanathos" , "Hypnos"] is given', () => {
  const multipleNames = ['Kratos', 'Thanathos', 'Hypnos']
  expect(greet(multipleNames)).toBe('Hello, Kratos, Thanathos and Hypnos.')
})
