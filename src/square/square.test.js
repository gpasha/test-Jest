const square = require('./square')

// test('validate value', () => {
//     expect(validateValue(50)).toBe(true)
// })

describe('square numbers', () => {
    let mocks = []

    beforeEach(() => {

    })
    beforeAll(() => {

    })

    test('1', () => {
        expect(square(1)).toBe(1)
    })
    test('2', () => {
        expect(square(2)).toBe(4)
    })
    test('3', () => {
        expect(square(3)).toBe(9)
    })
    test('call 1', () => {
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(1)
        expect(spyMathPow).toBeCalledTimes(0)
    })
    test('call 2', () => {
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(2)
        expect(spyMathPow).toBeCalledTimes(1)
    })

    afterEach(() => {

    })
    afterAll(() => {

    })
})