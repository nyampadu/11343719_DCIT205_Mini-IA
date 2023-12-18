const express = require('express');
const router = express.Router();
const encounterController = require('../controllers/encounterController');
const validate = require('../middlewares/validate');

router.post('/start', validate.validateFields(['patientId', 'typeOfEncounter']), encounterController.startEncounter);
router.post('/vitals', validate.validateFields(['patientId', 'bloodPressure', 'temperature', 'pulse', 'spO2']), encounterController.submitVitals);

module.exports = router;
