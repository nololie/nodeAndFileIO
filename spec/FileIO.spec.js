let visitor = require('../src/FileIO.js')

describe('function save()', () => {
    let alice = new visitor.Visitor('alice_cooper', 21, '13/01/2020', '12:00', 'amazing', 'Sbonelo')

    it('exists', () => {
        expect(alice.save()).toBeDefined()
    })
    it('creates named files', () => {
        expect('../src/visitor_alice_cooper.json').toBeDefined()
    })
})