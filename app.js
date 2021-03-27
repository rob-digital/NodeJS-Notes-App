// const fs = require('fs')
// const  validator = require('validator');

const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')
const { argv } = require('yargs')

const greenBG = chalk.green.inverse
const redBG   = chalk.red.inverse
const blueBG  = chalk.blue.inverse
const greyBG  = chalk.grey.inverse

const command = process.argv[2]

// changing app version
yargs. version('1.1.0')


//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Add a note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Add some text',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
   
        notes.addNote(argv.title, argv.body)

    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Remove a title',
            demandOption: true,
            type: 'string'
        }
    },  
    handler(argv) {
     
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List of nodes',
    handler() {
        console.log(blueBG('List of the notes: '))
        notes.displayNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Read a title',
            demandOption: true,
            type: 'string'
        }
    },  
    handler(argv) {
        notes.readNote(argv.title)
    }
})




// console.log('------------------------------------');
// console.log(process.argv);
// console.log(yargs.argv);  // this must be on the bottom to display options when using '--help'
                            // or use yargs.parse() on the bottom
// console.log('------------------------------------');

yargs.parse()       // provide this on the bottom to see output in the console






// const msg = getNotes()
// const success = 'Success!!!'
// const greenBG = chalk.bgGreen

// console.log('------------------------------------');
// console.log(chalk.bgCyan(chalk.black(msg)));
// console.log('------------------------------------');

// console.log('------------------------------------');
// console.log(greenBG(chalk.black(success)));
// console.log('------------------------------------');

// console.log('------------------------------------');
// console.log(process.argv[2]);
// console.log('------------------------------------');
