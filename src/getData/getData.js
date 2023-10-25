const axios = require('axios')
const mapArrToString = require('../mapArrToString/mapArrToString')

const getData = async () => {
    try {
        const data = await axios.get('https://jsonplaceholder.typicode.com/users')
        const userIds = data.data.map(user => user.id)
        return mapArrToString(userIds)
    } catch (error) {

    }
}

module.exports = getData