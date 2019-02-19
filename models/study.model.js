const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const StudySchema = new Schema({
  PatientID: { type: String, required: true, trim: true },
  PatientDetails: { type: Object, trim: true },
  FileDetails: { type: Object, trim: true },
  ReportDetails: { type: Object, trim: true },
  Status: { type: String, required: true, trim: true },
  Assign: { type: String, required: true, trim: true }
});

module.exports = mongoose.model('Study', StudySchema, 'study');