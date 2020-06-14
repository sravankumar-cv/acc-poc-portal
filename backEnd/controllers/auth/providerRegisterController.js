/**
 * @description Controller for adding new partner
 * @author Jithin Zacharia
 */

const providerModel = require('../../model/providerModel'),
        uniqueIdGenerator = require('../../helpers/generateId'),
        passwordValidator = require('../../helpers/passwordValidations');

exports.registerPartner = (req, res) => {
    providerModel.find({email: req.body.email},{mobileNumber: req.body.mobileNumber}, (err, users)=>{
        if(err) {
            res.status(400).json(err);
        } else {
            if(!users.length) {
                providerModel.create({
                    partnerId: uniqueIdGenerator.generateUniqueId(),
                    fullName: req.body.fullName,
                    password: passwordValidator.generatePasswordHash(req.body.password),
                    email: req.body.email,
                    mobileNumber: req.body.mobileNumber,
                    role: 2,
                    country: req.body.country,
                    OrganizationName: req.body.OrganizationName,
                    OrganizationAddress: req.body.OrganizationAddress,
                    OrganizationRegNumber: req.body.OrganizationRegNumber,
                    idType: req.body.idType,
                    servicesOffered: req.body.servicesOffered,
                    providerIdentityImg: req.body.providerIdentityImg,
                    partnerType: req.body.partnerType,
                }, (error, partner)=> {
                    if(error) {
                        res.status(400).json(error);
                    } else {
                        res.status(201).json("Partner successfully created.");   
                    }
                })
            } else {
                res.status(400).json("User alraedy exist. Please try again later.");
            }
        }
    })
}