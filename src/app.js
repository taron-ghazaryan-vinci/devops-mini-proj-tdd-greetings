function greet (name) {
  if (!name || name.trim().length === 0) return 'Hello, my friend'
  if (name.toUpperCase() === name) return 'HELLO, ' + name.toUpperCase() + '!'
  return 'Hello, ' + name
}

module.exports = greet
