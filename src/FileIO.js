'use strict'

const fs = require('fs');

const Visitor = class {
    constructor(fullName, age, date, time, comments, person) {
        this.fullName = fullName;
        this.age = age;
        this.date = date;
        this.time = time;
        this.comments = comments;
        this.person = person;
    }

    /*
     *Create a function called save that saves the visitor's data to a JSON file.
     *The file name should be named like this visitor_{their_full_name}.json
    */
    async save() {
        fs.writeFile('visitor_' + this.fullName + '.json', JSON.stringify(this, null, 4), (err) => {
            if (err) {
                throw err;
            }
        });
        return this;
    }
    
}

/*
 *Create a function called load that takes in a name and then grabs a Visitor object from file.
 *It should simply console.log the visitor.
*/
function load(fullName) {
    let name = fullName.replace(' ', '_')
    fs.readFile('visitor_' + name +'.json', 'utf8', (err, data) => {
        if(err){
            throw err;
        }else{
            console.log(data);
        }
    })
    return this;
}

// CREATE objects
let alice = new Visitor('alice_cooper', 21, '13/01/2020', '12:00', 'amazing', 'Sbonelo');
let bob = new Visitor('bob_marley', 24, '14/01/2020', '13:00', "he seems alright", 'Sbonelo');
let charlie = new Visitor('charlie_sheen', 19, '14/01/2020', '14:00', 'Interesting', 'Sbonelo');

// CALL object.save
alice.save();
bob.save();
charlie.save();

// CALL load
load('alice cooper')
load('bob marley');
load('charlie sheen');

module.exports = {
    Visitor,
    load
}