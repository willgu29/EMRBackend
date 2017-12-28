/* NOTE TO CODER:

The purpose of the Finds model is to allow flexibility in what the client can
send as a query to the server and still hit as a result.

Drew would add relevant search terms and with the help of an admin panel, would
populate the proxy array with the appropriate word orderings that doctor's could
search for. (See pages/admin/proxy.vue)

*/

import mongoose from 'mongoose'


var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var FindSchema = new Schema({
    template:    {type: ObjectId, ref: 'Template'},
    proxy:       [{type: String, uppercase: true}]
});
var Find = mongoose.model('Find', FindSchema)

export default Find
