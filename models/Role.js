/**
 * Created by ep3998 on 2/6/2016.
 */
var mongoose = require('mongoose');

var RoleSchema = new mongoose.Schema({
    name: String,
    description: String,
    attributes: [String],
    created_date: { type: Date, default: Date.now },
    last_modified_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Role', RoleSchema);