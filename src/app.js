function greet(name) {
    let hello = 'Hello'
    let and = ' and '
    let language = 'en'
    if (!Array.isArray(name)) {
        return isNotArray(name)
    } else {
        language = findLanguage(name, language)
        if (language === 'fr') {
            hello = 'Bonjour'
            and = ' et '
        } else if (language === 'nl') {
            hello = 'Goeidag'
            and = ' en '
        }
        const nameUpperCase = []
        for (let i = 0; i < name.length; i++) {
            if (name[i] === name[i].toUpperCase()) {
                nameUpperCase.push(name[i])
                name.splice(i, 1)
                i--
            }
        }
        if (name.length === 0) {
            return onlyUpperCaseNames(nameUpperCase, hello, and)
        }
        return mixedCaseNames(nameUpperCase, name, hello, and)
    }

    function isNotArray(name) {
        if (!name || name.trim().length === 0) {
            return 'Hello, my friend'
        }
        if (name.toUpperCase() === name) {
            return 'HELLO, ' + name.toUpperCase() + '!'
        }
        return 'Hello, ' + name
    }

    function onlyUpperCaseNames(nameUpperCase, hello, and) {
        if (nameUpperCase.length > 2) {
            const lastElementUpperCase = nameUpperCase.pop()
            return (
                hello.toUpperCase() +
                ', ' +
                nameUpperCase.join(', ') +
                and.toUpperCase() +
                lastElementUpperCase +
                '!'
            )
        } else {
            return (
                hello.toUpperCase() + ', ' + nameUpperCase.join(' AND ') + '!'
            )
        }
    }

    function mixedCaseNames(nameUpperCase, name, hello, and) {
        const lastElement = name.pop()
        if (nameUpperCase.length > 1) {
            const lastElementUpperCase = nameUpperCase.pop()
            return (
                hello +
                ', ' +
                name.join(', ') +
                and +
                lastElement +
                '.' +
                and.toUpperCase() +
                hello.toUpperCase() +
                ' ' +
                nameUpperCase.join(', ') +
                ' AND ' +
                lastElementUpperCase +
                '!'
            )
        }
        if (nameUpperCase.length === 1) {
            return (
                hello +
                ', ' +
                name.join(', ') +
                and +
                lastElement +
                '.' +
                and.toUpperCase() +
                hello.toUpperCase() +
                ' ' +
                nameUpperCase[0] +
                '!'
            )
        } else {
            return hello + ', ' + name.join(', ') + and + lastElement + '.'
        }
    }

    function findLanguage(name, language) {
        for (let i = 0; i < name.length; i++) {
            if (name[i] === 'fr' || name[i] === 'nl' || name[i] === 'en') {
                language = name[i]
                name.splice(i, 1)
                break
            }
        }
        return language
    }
}

module.exports = greet
