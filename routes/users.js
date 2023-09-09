const express = require('express')
const router = express.Router()
const Users = require('../models/Users')

router.post('/create-user', async (req, res) => {
    const response = await Users.create({
        ...req.body
    })

    console.log(response)
    return res.status(200).json(response)
})

router.delete('/delete-user', async (req, res) => {
    const response = await Users.findOneAndDelete({
        email: req.body.email
    })

    console.log(response)
    return res.status(200).json(response)
})

router.post('/get-user', async (req, res) => {
    const response = await Users.findOne({
        email: req.body.email
    })
    return res.status(200).json(response)
})

router.put('/update-user', async (req, res) => {
    const response = await Users.findOneAndUpdate({
        email: req.body.email
    },
        {
            ...req.body.update
        }
    )

    return res.status(200).json(response)

})
module.exports = router
