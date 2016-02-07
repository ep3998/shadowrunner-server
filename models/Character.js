/**
 * Created by ep3998 on 2/6/2016.
 */
var mongoose = require('mongoose');

var CharacterSchema = new mongoose.Schema({
    name: String,
    age: Number,
    height: String,
    attributes: {
        physical:{
            body: Number,
            agility: Number,
            reaction: Number,
            strength: Number
        },
        mental:{
            willpower: Number,
            logic: Number,
            intuition: Number,
            charisma: Number
        },
        special:{
            essence: Number,
            edge: Number,
            magic: Number,
            resonance: Number,
            initiative: Number
        }
    },
    condition_physical: Number,
    condition_stun: Number,
    created_date: { type: Date, default: Date.now },
    last_modified_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Character', CharacterSchema);
