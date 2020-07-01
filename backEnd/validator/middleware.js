const joi = require('joi');

const middleware = (schema, property) => { 
    
    return (req, res, next) => { 
    const { error } = joi.validate(req.body, schema);
    const valid = error == null; 
  
    if (valid) { 
      next(); 
    } else { 
      res.status(422).json("Invalid parameters provided. Please provide valid parameters.");
    } 
  } 
}

module.exports = middleware;