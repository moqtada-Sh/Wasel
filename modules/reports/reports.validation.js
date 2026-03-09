const Joi = require("joi");

const createReportSchema = Joi.object({
    user_id: Joi.number().integer().required(),
    category: Joi.string().valid("closure","delay","accident","weather","hazard").required(),
    description: Joi.string().max(1000).required(),
    latitude: Joi.number().min(-90).max(90).required(),
    longitude: Joi.number().min(-180).max(180).required()
});

const voteSchema = Joi.object({
    user_id: Joi.number().integer().required(),
    vote: Joi.string().valid("up","down").required()
});

const moderateSchema = Joi.object({
    moderator_id: Joi.number().integer().required(),
    action: Joi.string().valid("approve","reject","merge","delete").required(),
    reason: Joi.string().allow(null,"")
});

module.exports = {
    createReportSchema,
    voteSchema,
    moderateSchema
};