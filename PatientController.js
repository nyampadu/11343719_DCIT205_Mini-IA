const Patient = require('../models/patient');

// Registraton
exports.registerPatient = async (req, res) => {
    try {
        const {
            surname,
            othernames,
            gender,
            phoneNumber,
            residentialAddress,
            emergencyName,
            emergencyContact,
            relationshipWithPatient,
        } = req.body;

        if (!surname || !othernames || !gender || !phoneNumber || !residentialAddress) {
            return res.status(400).json({ message: 'Incomplete patient information' });
        }

        const existingPatient = await Patient.findOne({ phoneNumber });
        if (existingPatient) {
            return res.status(400).json({ message: 'Patient already registered' });
        }

        const newPatient = new Patient({
            surname,
            othernames,
            gender,
            phoneNumber,
            residentialAddress,
            emergencyName,
            emergencyContact,
            relationshipWithPatient,
        });

        const savedPatient = await newPatient.save();
        res.status(201).json(savedPatient);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// List
exports.listPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


exports.getPatientDetails = async (req, res) => {
    try {
        const { patientId } = req.params;
        const patient = await Patient.findById(patientId);

        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        res.status(200).json(patient);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
