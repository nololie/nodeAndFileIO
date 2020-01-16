let visitor = require('../src/FileIO.js')

describe('function save()', () => {
    let alice = new visitor.Visitor('alice_cooper', 21, '13/01/2020', '12:00', 'amazing', 'Sbonelo')
    
    it('exists', () => {
        expect(alice.save).toBeDefined()
    })

    alice.save()

    it('creates named files', () => {
        aliceFile = require('../Visitors/visitor_alice_cooper.json')
        expect(aliceFile).toBeDefined()
    })

    it("writes a visitor's content to a respectively named file", () => {
        let fs = require('fs')
        fs.readFile('../Visitors/visitor_alice_cooper.json', (err, data) =>{
            let jsonData = JSON.parse(data)
            expect(JSON.stringify(jsonData)).toEqual(JSON.stringify(alice))
        })
    })
})

describe('function load()', () => {
    it('exists', () => {
        expect(visitor.load).toBeDefined()
    })
})