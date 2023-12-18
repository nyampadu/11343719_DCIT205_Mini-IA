const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const validate = require('../middlewares/validate');

router.post('/register', patientController.registerPatient);
router.get('/list', patientController.listPatients);
router.get('/:patientId', patientController.getPatientDetails);

module.exports = router;



