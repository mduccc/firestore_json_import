require('dotenv').config()

let upload_module = require('./scripts/upload_json_to_firestore')
let uploader = new upload_module()

let commands = process.argv.slice(2)

let taskName = commands[0]
let arg1 = commands[1]
let arg2 = commands[2]

if (taskName === 'upload'
    && arg1 != null
    && arg2 != null) {
    uploader.fromFile(arg1.split('/'), './json_file/' + arg2)
} else {
    console.log(`Command:
    node app.js upload <colection/doc> <file>: Start upload json to firestore with one collection`)
}