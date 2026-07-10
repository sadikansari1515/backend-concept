const fs = require('fs')

// write file
// fs.writeFile("hello.txt", "hello from node.js", (err) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log("file created")
//     }
// })

// read file
// fs.readFile("hello.txt", 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log(data)
//     }
// })

// update file
// fs.writeFile('hello.txt', 'welcome to node.js', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('file updated')
//     }
// })

// append file
// fs.appendFile('hello.txt', "hello from node.js", (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('file updated')
//     }
// })

// delete file
// fs.unlink('hello.txt', (err) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log('file deleted')
//     }
// })

// create  folder
// fs.mkdir("sampleFolder", (err) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log('folder created')
//     }
// })

// read folder
// fs.readdir('sampleFolder', (err, files) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log(files)
//     }
// })

// delete folder
fs.rmdir('sampleFolder', {
    recursive: true
}, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('folder deleted')
    }
})