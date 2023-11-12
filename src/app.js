function greet (name) {
  if (!Array.isArray(name)) {
    if (!name || name.trim().length === 0) return 'Hello, my friend'
    if (name.toUpperCase() === name) return 'HELLO, ' + name.toUpperCase() + '!'
  } else {
    const lastElement = name.pop()
    return 'Hello, ' + name.join(', ') + ' and ' + lastElement + '.'
  }
  return 'Hello, ' + name
}

module.exports = greet
