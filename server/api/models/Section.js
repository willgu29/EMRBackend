import mongoose from 'mongoose'

// header: CHIEF COMPLIANT, HISTORY OF PRESENT ILLNESS, PROBLEM LIST,
// PAST MEDICAL HISTORY, ... etc.

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var SectionSchema = new Schema({
    header:      String,
    text:        String,
    diagnosis: {type: ObjectId, ref: 'Diagnosis'}
}, { timestamps: { createdAt: 'createdAt' }});

var Section = mongoose.model('Section', SectionSchema)

export default Section
