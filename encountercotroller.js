const Encounter = require('../models/encounter');
const Patient = require('../models/patient');

exports.startEncounter = async (req, res) => {
    try {
        const { patientId, typeOfEncounter } = req.body;

        // Validating
        if (!patientId || !typeOfEncounter) {
            return res.status(400).json({ message: 'Incomplete encounter information' });
        }

        // Patient existence
        const patient = await Patient.findById(patientId);
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        const newEncounter = new Encounter({
            patient: patientId,
            dateAndTime: new Date(),
            typeOfEncounter,
        });

        const savedEncounter = await newEncounter.save();
        res.status(201).json(savedEncounter);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Submit vitals 
exports.submitVitals = async (req, res) => {
    try {
        const { patientId, bloodPressure, temperature, pulse, spO2 } = req.body;


        if (!patientId || !bloodPressure || !temperature || !pulse || !spO2) {
            return res.status(400).json({ message: 'Incomplete vitals information' });
        }


        const patient = await Patient.findById(patientId);
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        const latestEncounter = await Encounter.findOne({ patient: patientId }).sort({ dateAndTime: -1 });
        if (!latestEncounter) {
            return res.status(404).json({ message: 'No encounter found for the patient' });
        }


        latestEncounter.vitals = {
            bloodPressure,
            temperature,
            pulse,
            spO2,
        };

        await latestEncounter.save();
        res.status(200).json({ message: 'Vitals submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
