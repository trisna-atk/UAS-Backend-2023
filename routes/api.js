// import PatientController
const StudentController =
require("../controlers/patientController")

// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello Covid API Express");
});

// Membuat routing patient
router.get('/patients', PatientController.index);
router.post('/patients', PatientController.store);
router.put('/patients/:id', PatientController.update);
router.delete('/patients/:id', PatientController.destroy);
// menambahkan route untuk get detail resource
router.get('/patients/:id', PatientController.show);
// menambahkan route untuk get resource by name
router.get('/patients/search/:name', PatientController.search);
// menambahkan route untuk get positive resource. 
router.get('/patients/search/status/positive', PatientController.positive);
// menambahkan route untuk get recovered resource. 
router.get('/patients/search/status/recovered', PatientController.recovered);
// menambahkan route untuk get dead resource. 
router.get('/patients/search/status/dead', PatientController.dead);


// export router
module.exports = router;