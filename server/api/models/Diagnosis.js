import mongoose from 'mongoose'

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var DiagnosisSchema = new Schema({
    displayText: {type: String, default: ''},
    code:        {type: String, default: ''},
    name:        {type: String, default: ''}

}, { timestamps: { createdAt: 'createdAt' }});

var Diagnosis = mongoose.model('Diagnosis', DiagnosisSchema)

export default Diagnosis
