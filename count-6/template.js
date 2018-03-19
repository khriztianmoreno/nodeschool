let arg = process.argv
let argLower = arg[2].toLowerCase()

let template = `Hello, ${arg[2]}!
Your name lowercased is "${argLower}".`

    console.log(template)
