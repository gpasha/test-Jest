const delay = require('./delay')

describe('delay function', () => {
    test('correct value', async () => {
        const res = await delay(() => 5 + 5, 1000)
        expect(res).toBe(10)
    })
})