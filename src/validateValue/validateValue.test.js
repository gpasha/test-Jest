const validateValue = require('./validateValue')

// test('validate value', () => {
//     expect(validateValue(50)).toBe(true)
// })

describe('validate value', () => {
    test('necessary value', () => {
        expect(validateValue(50)).toBe(true)
    })
    test('corner min value', () => {
        expect(validateValue(0)).toBe(true)
    })
    test('corner max value', () => {
        expect(validateValue(100)).toBe(true)
    })
    test('less than necessary', () => {
        expect(validateValue(-1)).toBe(false)
    })
    test('more than necessary ', () => {
        expect(validateValue(150)).toBe(false)
    })
})