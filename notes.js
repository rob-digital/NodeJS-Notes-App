const fs = require('fs')
const chalk = require('chalk')

const greenBG = chalk.green.inverse
const redBG   = chalk.red.inverse
const greyBG  = chalk.grey.inverse
const blueBG  = chalk.blue.inverse


const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicatedNotes = notes.filter(note => {
        return note.title === title
    })
    debugger
    if(duplicatedNotes.length === 0) {
        notes.push({
        title: title,
        body: body
        })

        saveNotes(notes)
        console.log(greenBG('New note added..!'))

    } else {
        console.log(redBG('Note title taken!'))
    }
}

const displayNotes = () => {

    const notes = loadNotes()

    notes.forEach(element => {
        console.log('------------------------------------');
        console.log(`${element.title}; ${element.body}`);
        console.log('------------------------------------');
    });
}

const readNote = (title) => {
    const notes = loadNotes()

    const desiredTitle = notes.find(el => (el.title === title))

    if (desiredTitle) {
        console.log('------------------------------------');
        console.log(blueBG('Your note: '))
        console.log(`${desiredTitle.title}: ${desiredTitle.body}`);
        console.log('------------------------------------');
    } else {
        console.log('------------------------------------');
        console.log(redBG('Unable to find a note!'))
        console.log('------------------------------------');
    }
    

}

const removeNote = (title) => {
    const notes =loadNotes()

    if(notes.findIndex(el => el.title === title) !== -1) {
        notes.splice(notes.findIndex(el => el.title === title), 1)
        console.log(redBG('Note removed!'))
    } else {
        console.log(greyBG(`Can't find the file specified !`))
    }
    
    
    saveNotes(notes)
}

const saveNotes = (notes) => {
    const finalNotes = JSON.stringify(notes)
    fs.writeFileSync('notes.json', finalNotes)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (error) {
        return []
    }
    
}


module.exports = {
  
    addNote,
    removeNote,
    readNote,
    displayNotes
}