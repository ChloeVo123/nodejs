//const validator = require('validator')
const getNotes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

// Customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: () => {
        console.log('Add new note')
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    handler: () => {
        console.log('remove a note')
    }
})

//add, remove, read, list 


console.log(yargs.argv)