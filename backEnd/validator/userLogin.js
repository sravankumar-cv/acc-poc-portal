const joi = require('joi');

const userLoginSchema = joi.object().keys({
    email: joi.string().exist().normalize().email(),
    password: joi.string().exist().required(),
    role: joi.number().required().exist().valid([1,2,3])
})

module.exports = userLoginSchema;