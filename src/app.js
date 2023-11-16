function greet (name) {
  if (!Array.isArray(name)) {
    return isNotArray(name)
  } else {
    const nameUpperCase = []
    for (let i = 0; i < name.length; i++) {
      if (name[i] === name[i].toUpperCase()) {
        nameUpperCase.push(name[i])
        name.splice(i, 1)
        i--
      }
    }
    if (name.length === 0) {
      return onlyUpperCaseNames()
    }
    return mixedCaseNames(nameUpperCase, name)
  }

  function isNotArray (name) {
    if (!name || name.trim().length === 0) {
      return 'Hello, my friend'
    }
    if (name.toUpperCase() === name) {
      return 'HELLO, ' + name.toUpperCase() + '!'
    }
    return 'Hello, ' + name
  }

  function onlyUpperCaseNames (nameUpperCase) {
    if (nameUpperCase.length > 2) {
      const lastElementUpperCase = nameUpperCase.pop()
      return 'HELLO ' + nameUpperCase.join(', ') + ' AND ' + lastElementUpperCase + '!'
    } else {
      return 'HELLO ' + nameUpperCase.join(' AND ') + '!'
    }
  }

  function mixedCaseNames (nameUpperCase, name) {
    const lastElement = name.pop()
    if (nameUpperCase.length > 1) {
      const lastElementUpperCase = nameUpperCase.pop()
      return 'Hello, ' + name.join(', ') + ' and ' + lastElement + '. AND HELLO ' + nameUpperCase.join(', ') + ' AND ' + lastElementUpperCase + '!'
    }
    if (nameUpperCase.length === 1) {
      return 'Hello, ' + name.join(', ') + ' and ' + lastElement + '. AND HELLO ' + nameUpperCase[0] + '!'
    } else {
      return 'Hello, ' + name.join(', ') + ' and ' + lastElement + '.'
    }
  }
}

module.exports = greet
