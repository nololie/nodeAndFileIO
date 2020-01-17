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
}

module.exports = {
    Visitor,
    load
}