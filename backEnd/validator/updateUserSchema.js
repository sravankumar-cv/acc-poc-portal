const joi = require('joi');

const userProfileUpdateSchema= joi.object().keys({
    fullName: joi.string().required().exist().min(3),
    password: joi.string().exist().required().regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/),
    email: joi.string().exist().required().email(),
    mobileNumber: joi.string().exist().required(),
    country: joi.string().exist().required(),
    OrganizationName: joi.string().required().exist(),
})

module.exports = userProfileUpdateSchema;