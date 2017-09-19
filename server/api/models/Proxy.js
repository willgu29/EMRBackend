import mongoose from 'mongoose'


var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ProxySchema = new Schema({

    emr:         {type: ObjectId, ref: 'Emr'},
    proxy:       [{type: String, uppercase: true}]
});
var Proxy = mongoose.model('Proxy', ProxySchema)

export default Proxy
