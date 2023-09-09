const mongoose = require('mongoose')

const ConnectToMongo = async () => {
    const response = mongoose.connect("mongodb://192.168.1.38:27017/cryptocave")
    return response
}

module.exports = { ConnectToMongo }