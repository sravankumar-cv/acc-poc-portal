const joi = require('joi');

const userRegisterSchema = joi.object().keys({
    name: joi.string().exist().required(),
    email: joi.string().exist().email().required(),
    password: joi.string().exist().min(6).max(500).required(),
    phone_number: joi.string().exist().required()
})

module.exports = userRegisterSchema;