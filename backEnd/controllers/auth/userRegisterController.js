/**
 * @description Controller for adding a new user
 * @author Jithin Zacharia
 */

const userModel = require('../../model/userModel'),
    passwordValidator = require('../../helpers/passwordValidations');

/**
 * @exports userRegister
 */
exports.userRegister = (req, res) => {
    userModel.find({email: req.body.email}, (err, users)=> {
        if(err) {
            res.status(400).json(err);
        } else {
            if(!users.length) {
                userModel.create({
                    name: req.body.name,
                    password: passwordValidator.generatePasswordHash(req.body.password),
                    email: req.body.email,
                    phone_number: req.body.phone_number
                }, (error, newUser) => {
                    if(error) {
                        res.status(400).json(error);
                    } else {
                        res.status(201).json('User successfully created');
                    }
                })
            }
        }
    })
}