const joi = require("joi");
module.exports.listingscehmas= joi.object( {
     listing:joi.object({
            title:joi.string().required(),
             description:joi.string().required(),
             image:joi.string().allow("",null),
             price:joi.number().required().min(0),
             location:joi.string().required(),
             country:joi.string().required()
        }).required()
    }
)
module.exports.reviewscehma= joi.object({
    review: joi.object({
        rating: joi.number().required().min(0).max(5),
        comment: joi.string().required()
    }).required()
})