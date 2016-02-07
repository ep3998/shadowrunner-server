/**
 * Created by ep3998 on 2/6/2016.
 */
var mongoose = require('mongoose');

var DefinitionSchema = new mongoose.Schema({
    name: String,
    api_name: String,
    api_location: String,
    class: String,
    definition: String,
    usage: String,
    created_date: { type: Date, default: Date.now },
    last_modified_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Definition', DefinitionSchema);