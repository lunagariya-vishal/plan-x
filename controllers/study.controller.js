
const Study = require(basePath + '/models/study.model'),
    dicom = require("dicom-parser"),
    path = require('path'),
    fs = require('fs'),
    async = require('async'),
    _ = require('underscore');

exports.index = function (request, response) {
    const id = request.params.id;
    if (typeof id !== 'undefined') {
        Study.findById(id, (error, data) => {
            if (error) {
                response.json({ status: false, message: error, data: data });
            } else {
                if (data) {
                    response.json({ status: true, message: 'Data is available', data: data });
                } else {
                    response.json({ status: false, message: 'Data not available', data: data });
                }
            }
        });
    } else {
        Study.find({}, (error, data) => {
            if (error) {
                response.json({ status: false, message: error, data: data });
            } else {
                if (data.length) {
                    response.json({ status: true, message: 'Data is available', data: data });
                } else {
                    response.json({ status: false, message: 'Data not available', data: data });
                }
            }
        });
    }
}
exports.add = function (request, response) {
    var all_details = [];
    for (var i = 0; i < request.files.length; i++) {
        var file = basePath + '/uploads/' + request.files[i].filename;
        if (path.extname(file) == '.dcm') {
            var dicomFileAsBuffer = fs.readFileSync(file);
            var dataSet = dicom.parseDicom(dicomFileAsBuffer);
            var PatientID = dataSet.string('x00100020');
            var SeriesNumber = dataSet.string('x00200011');
            var BirthDate = dicom.parseDA(dataSet.string('x00100030'), true);
            var patientDetails = {
                'PatientID': dataSet.string('x00100020'),
                'Status': 0,
                'Assign': 0,
                'PatientDetails': {
                    'PatientName': { 'key': 'Patient Name', 'value': dataSet.string('x00100010') },
                    'BirthDate': { 'key': 'Birth Date', 'value': BirthDate.day + '-' + BirthDate.month + '-' + BirthDate.year },
                    'Gender': { 'key': 'Gender', 'value': dataSet.string('x00100040') },
                    'Age': { 'key': 'Age', 'value': dataSet.string('x00101010') },
                    'Address': { 'key': 'Address', 'value': dataSet.string('x00080081') }
                },
                'FileDetails': {}
            };
            var DateAcquired = "";
            var StudyDate = "";
            var DateAdded = "";
            var DateOpened = "";
            if (dataSet.string('x00080022') != undefined) {
                DateAcquired = dicom.parseDA(dataSet.string('x00080022'), true);
                DateAcquired = DateAcquired.day + '-' + DateAcquired.month + '-' + DateAcquired.year
            }
            if (dataSet.string('x00080020') != undefined) {
                StudyDate = dicom.parseDA(dataSet.string('x00080020'), true);
                StudyDate = StudyDate.day + '-' + StudyDate.month + '-' + StudyDate.year
            }
            if (dataSet.string('x0040A121') != undefined) {
                DateAdded = dicom.parseDA(dataSet.string('x0040A121'), true);
                DateAdded = DateAdded.day + '-' + DateAdded.month + '-' + DateAdded.year
            }
            if (dataSet.string('x0040A121') != undefined) {
                DateOpened = dicom.parseDA(dataSet.string('x0040A121'), true);
                DateOpened = DateOpened.day + '-' + DateOpened.month + '-' + DateOpened.year
            }

            patientDetails.FileDetails[SeriesNumber] = {
                'Protocol': { 'key': 'Protocol', 'value': dataSet.string('x00181030') },
                'Modality': { 'key': 'Modality', 'value': dataSet.string('x00080060') },
                'StudyDescription': { 'key': 'Study Description', 'value': dataSet.string('x00081030') },
                'AccessionNumber': { 'key': 'Accession Number', 'value': dataSet.string('x00080050') },
                'DateAcquired': { 'key': 'Date Acquired', 'value': DateAcquired },
                'DateAdded': { 'key': 'Date Added', 'value': DateAdded },
                'StudyDate': { 'key': 'Study Date', 'value': StudyDate },
                'DateOpened': { 'key': 'Date Opened', 'value': DateOpened },
                'Institution': { 'key': 'Institution', 'value': dataSet.string('x00080080') },
                'Lock': { 'key': 'Lock', 'value': dataSet.string('x00741230') },
                'PerformingPhysician': { 'key': 'Performing Physician', 'value': dataSet.string('x00081050') },
                'ReferringPhysician': { 'key': 'Referring Physician', 'value': dataSet.string('x00080090') },
                'Status': { 'key': 'Status', 'value': 0 },
                'Albumbs': { 'key': 'Albumbs', 'value': '' },
                'Report': { 'key': 'Report', 'value': '' },
                'ID': { 'key': 'ID', 'value': '' },
                'Comments': { 'key': 'Comments', 'value': '' },
                'Comments2': { 'key': 'Comments 2', 'value': '' },
                'Comments3': { 'key': 'Comments 3', 'value': '' },
                'Comments4': { 'key': 'Comments 4', 'value': '' }
            }
            all_details[SeriesNumber] = patientDetails;
            if (fs.existsSync(file)) {
                fs.unlinkSync(file);
            }
        }
    }
    var cleanArray = all_details.filter(function () {
        // return el != null;
        return true;
    });
    // var xyz = _.uniq(abc, function (p) { return p.PatientID });
    async.eachOfSeries(cleanArray, function (patient, key, callback) {
        Study.findOne({
            PatientID: patient.PatientID
        }, function (error, study) {
            if (error) {
                response.json({ status: false, message: 'Something is wrong', data: [] });
            } else {
                if (!study) {
                    let study = new Study({
                        PatientID: patient.PatientID,
                        PatientDetails: patient.PatientDetails,
                        FileDetails: patient.FileDetails,
                        Status: patient.Status,
                        Assign: patient.Assign
                    });
                    study.save(function (error, data) {
                        if (error) {
                            response.json({ status: false, message: 'Something is wrong', data: [] });
                        } else {
                            if (data) {
                                callback();
                                // response.json({ status: false, message: 'Study details inserted successfully', data: data });
                            } else {
                                response.json({ status: true, message: 'Sorry!!! Study details not inserted', data: data });
                            }
                        }
                    })
                } else {
                    Study.updateOne({
                        PatientID: patient.PatientID
                    }, { FileDetails: Object.assign(study.FileDetails, patient.FileDetails) }, function (error, data) {
                        if (error) {
                            response.json({ status: false, message: 'Something is wrong', data: [] });
                        } else {
                            if (data) {
                                callback();
                                // response.json({ status: false, message: 'Study details inserted successfully', data: data });
                            } else {
                                response.json({ status: true, message: 'Sorry!!! Study details not inserted', data: data });
                            }
                        }
                    });
                }
            }
        })
    });
    response.json({ status: true, message: 'Study Data inserted successfully', data: [] });
}
exports.edit = function (request, response) {
    Study.findById(request.params.id, (error, study) => {
        if (error) {
            response.json({ status: false, message: error, data: [] });
        }
        study.PatientDetails = request.body.PatientDetails || study.PatientDetails;
        study.save((error, data) => {
            if (error) {
                response.json({ status: false, message: 'Something is wrong', data: [] });
            } else {
                if (data) {
                    response.json({ status: true, message: 'Study details updated successfully', data: data });
                } else {
                    response.json({ status: false, message: 'Sorry!!! Study details not updated', data: data });
                }
            }
        });
    });
}
exports.editReport = function (request, response) {
    Study.findById(request.params.id, (error, study) => {
        if (error) {
            response.json({ status: false, message: error, data: [] });
        }
        study.ReportDetails = request.body.ReportDetails || study.ReportDetails;
        study.save((error, data) => {
            if (error) {
                response.json({ status: false, message: 'Something is wrong', data: [] });
            } else {
                if (data) {
                    response.json({ status: true, message: 'Study details updated successfully', data: data });
                } else {
                    response.json({ status: false, message: 'Sorry!!! Study details not updated', data: data });
                }
            }
        });
    });
}
/*
'PatientDetails': {
                    'PatientName': { 'key': 'Patient Name', 'value': dataSet.string('x00100010') },
                    'BirthDate': { 'key': 'Birth Date', 'value': dataSet.string('x00100030') },
                    'Gender': { 'key': 'Gender', 'value': dataSet.string('x00100040') },
                    'Age': { 'key': 'Age', 'value': dataSet.string('x00101010') },
                    'Address': { 'key': 'Address', 'value': dataSet.string('x00080081') },
                    'StudyDescription': { 'key': 'Study Description', 'value': dataSet.string('x00081030') },
                    'StudyDate': { 'key': 'Study Date', 'value': dataSet.string('x00080020') },
                    'ReferringPhysician': { 'key': 'Referring Physician', 'value': dataSet.string('x00080090') },
                    'Modality': { 'key': 'Modality', 'value': dataSet.string('x00080060') },
                    'Protocol': { 'key': 'Protocol', 'value': dataSet.string('x00181030') },
                    'SeriesNumber': { 'key': 'Series Number', 'value': dataSet.string('x00200011') },
                    'StudyID': { 'key': 'Study ID', 'value': dataSet.string('x0020000d') },
                    'SeriesID': { 'key': 'Series ID', 'value': dataSet.string('x0020000e') },
                }
*/

/*Study.find({ 'PatientID': patient.PatientID }, (error, data) => {
            if (error) {
                response.json({ status: false, message: error, data: [] });
            } else {
                if (data.length == 0) {
                    let study = new Study();
                    study.PatientID = patient.PatientID;
                    study.PatientDetails = patient.PatientDetails;
                    study.FileDetails = patient.FileDetails;
                    study.Status = patient.Status;
                    study.Assign = patient.Assign;
                    study.save((error, data) => {
                        if (error) {
                            response.json({ status: false, message: 'Something is wrong', data: [] });
                        } else {
                            if (data.length) {
                                callback();
                                // response.json({ status: false, message: 'Study details inserted successfully', data: data });
                            } else {
                                response.json({ status: true, message: 'Sorry!!! Study details not inserted', data: data });
                            }
                        }
                    });
                } else {
                    Study.findById(data[0]._id, (error, study) => {
                        if (error) {
                            response.json({ status: false, message: error, data: [] });
                        } else {
                            study.PatientID = study.PatientID;
                            study.PatientDetails = study.PatientDetails;
                            study.FileDetails = Object.assign(data[0].FileDetails, patient.FileDetails);
                            study.Status = study.Status;
                            study.Assign = study.Assign;
                            study.save((error, data) => {
                                if (error) {
                                    response.json({ status: false, message: 'Something is wrong', data: [] });
                                } else {
                                    if (data.length) {
                                        callback();
                                        // response.json({ status: false, message: 'Study details inserted successfully', data: data });
                                    } else {
                                        response.json({ status: true, message: 'Sorry!!! Study details not inserted', data: data });
                                    }
                                }
                            });
                        }
                    });
                }
            }
        });*/