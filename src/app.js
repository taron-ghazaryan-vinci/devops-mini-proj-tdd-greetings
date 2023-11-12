function greet (name) {
  console.log(name)
  if (!name || name.trim().length === 0) return 'Hello, my friend'
  return 'Hello, ' + name
}

module.exports = greet
