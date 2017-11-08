import mongoose from 'mongoose'


var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var EmrSchema = new Schema({
    name:        String,
    description: {
      short:       String,
      category:    String,
      domain:      String,
    },
    author: {
      name:         String,
      institution:  String,
      degree:       String,
    },
    program: {
      name:         String,
      version:      String,
    },
    type:        String,
    fileType:    String,
    filePath:    String,
});

var Emr = mongoose.model('Emr', EmrSchema)

export default Emr
