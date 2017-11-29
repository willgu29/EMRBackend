import mongoose from 'mongoose'


var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var FindSchema = new Schema({
    template:    {type: ObjectId, ref: 'Template'},
    proxy:       [{type: String, uppercase: true}]
});
var Find = mongoose.model('Find', FindSchema)

export default Find
