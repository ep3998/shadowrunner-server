var mongoose = require('mongoose');

var MetatypeSchema = new mongoose.Schema({
    metatype: String,
    specials: Number
});

var SkillSchema = new mongoose.Schema({
    rating: Number,
    type: String
});

var MagicSchema = new mongoose.Schema({
    types: [String],
    class: String,
    attribute: Number,
    skills: [SkillSchema],
    spells: Number,
    forms: Number
});

var PrioritySchema = new mongoose.Schema({
    priority: String,
    metatypes: [MetatypeSchema],
    attributes: Number,
    magics: [MagicSchema],
    skills: Number,
    skillGroupMax: Number,
    resource: Number,
    created_date: { type: Date, default: Date.now },
    last_modified_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Priority', PrioritySchema);