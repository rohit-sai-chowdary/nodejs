const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(os.uptime())


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMen : os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)