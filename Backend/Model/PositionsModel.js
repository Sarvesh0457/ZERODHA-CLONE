const {model} = require('mongoose');
const { PositionSchema } = require('../Schemas/PositionsSchema');

const PositionModel = new model("position", PositionSchema);

module.exports = {PositionModel};