let {Visitor} = require('../src/FileIO.js')

describe('function save()', () => {
    let alice = new Visitor('alice_cooper', 21, '13/01/2020', '12:00', 'amazing', 'Sbonelo')
    
    it('exists', () => {
        expect(alice.save).toBeDefined()
    })
    
    it("writes a visitor's content to a respectively named file", () => {
        fs = require('fs')

        alice.save()
        
        fs.readFile('visitor_alice_cooper.json', 'UTF8', (err, data) =>{
            if(err)throw err
            else{
                let readData = JSON.parse(data)
                expect(readData.fullName).toEqual('alice_cooper')
                expect(readData.age).toEqual(21)
                expect(readData.date).toEqual('13/01/2020')
                expect(readData.time).toEqual('12:00')
                expect(readData.comments).toEqual('amazing')
                expect(readData.person).toEqual('Sbonelo')

            }
        })
    })
})
