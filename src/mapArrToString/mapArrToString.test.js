const mapArrToString = require('./mapArrToString')

describe('number array to string array', () => {
    test('necessary Number value', () => {
        expect(mapArrToString([1, 2, 45, 65])).toStrictEqual(['1', '2', '45', '65'])
    })
    test('with other types of value', () => {
        expect(mapArrToString([1, 2, 45, '65'])).toStrictEqual(['1', '2', '45'])
    })
    test('with other types of value', () => {
        expect(mapArrToString([1, 2, 45, undefined, null, 'safasd'])).toStrictEqual(['1', '2', '45'])
    })
    test('empty array', () => {
        expect(mapArrToString([])).toStrictEqual([])
    })
    test('negative test', () => {
        expect(mapArrToString([1, 2, 45])).not.toStrictEqual(['1', '2', '45', '65'])
    })
})