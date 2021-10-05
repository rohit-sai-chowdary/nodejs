// Modules - encapsulated code (only share minimum)
// CommonJS, every file is a module ( by default )

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')



console.log(data)
sayHi("Susan")
sayHi(names.john)
sayHi(names.peter)

// Built-in modules
// OS
// PATH
// FS
// HTTP