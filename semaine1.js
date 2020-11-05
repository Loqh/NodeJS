const fs = require('fs')
var file = "semaine1.js"

console.log("--------------------------------------------------")
console.log("File : "+file)
console.log("--------------------------------------------------")

function ReadFile() {
    console.log('Opening ' + file)
    ReadFileAsync(1000)
        .then(result => {
            console.log(result.toString())
        })
        .catch(err => {
            console.error({
                err
            })
        })
}

function ReadFileAsync(ms) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fs.readFile(file, (err, data) => {
                if (err) {
                    reject('Couldn\'t read ' + file)
                } else {
                    resolve(data)
                }
            })
        }, ms)
    })

}