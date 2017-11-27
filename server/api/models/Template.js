import mongoose from 'mongoose'

// type: HISTORY AND PHYSICAL, CONSULTATION, INITIAL EVALUATION
// specialty: PSYCHIATRY, INTERNAL MEDICINE, FAMILY MEDICINE
// context: ALL, INPATIENT, OUTPATIENT, CONSULTATION, HOME HEALTH
// emr: NONE, EPIC, CERNER, CPRS, QUEST

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var TemplateSchema = new Schema({
    name:        String,
    type:        String,
    specialty:   String,
    context:     String,
    emr:         String,
    author: {
      name:         String,
      degree:       String,
    },
    diagnosis: {type: ObjectId, ref: 'Diagnosis'},
    sections: [{type: ObjectId, ref: 'Section'}]
}, { timestamps: { createdAt: 'createdAt' });

var Template = mongoose.model('Template', TemplateSchema)

export default Template
