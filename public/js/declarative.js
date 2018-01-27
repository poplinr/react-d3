// imperative vs. declarative programming:

// imperative:
const toLowerCase = input => { // will show an issue in WebStorm currently
    const output = []
    for (let i = 0; i < input.length; i++) {
        output.push(input[i].toLowerCase())
    }
    return output
}
console.log(toLowerCase(['POPLIN', 'R']))

// declarative:
const toLowerCaseD = input => input.map(
    value => value.toLowerCase()
)
console.log(toLowerCaseD(['POPLIN', 'R']))




