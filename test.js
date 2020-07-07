var {StringHelpers} = require("./js_strings_helpers")

var helpers = StringHelpers("olatunde")
//StringHelpers()

console.log(helpers.randomize())
console.log(helpers.randomize(2))
console.log(helpers.randomize(3))
console.log(helpers.randomize(degree=10))