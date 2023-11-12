function greet (name) {
  if (!Array.isArray(name)) {
    if (!name || name.trim().length === 0) return 'Hello, my friend'
    if (name.toUpperCase() === name) return 'HELLO, ' + name.toUpperCase() + '!'
  } else {
    return 'Hello, ' + name[0] + ' and ' + name[1] + '.'
  }
  return 'Hello, ' + name
}

module.exports = greet
