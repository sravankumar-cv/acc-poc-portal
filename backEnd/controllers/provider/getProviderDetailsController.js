/**
 * @fileoverview Controller for getting all the providers
 * @author Jithin Zacharia
 */

const provideModel = require('../../model/providerModel');

exports.getProviderDetails = (partnerId, res) => {
    provideModel.find({partnerId: partnerId}, (err, providers)=> {
        if(err) {
            res.status(400).json(err);
        } else {
            res.status(200).json(providers);
        }
    })
}