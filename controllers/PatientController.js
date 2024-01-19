// import Model Patient
const Patient = require("../models/patientModels");

// buat class PatientController
class PatientController{
    async index(req, res) {
    const patient= await Patient.all()
    
    if (Patient.lenght > 0 ) {
        const data = {
            messege : "Menampilkan semua patients",
            data: patients,
        }

        return res.status(200).json(data)
    }

    //else
    const data ={
        messege: "patient is empty",
    }

    return res.status(200).json(data)
}

      
    async store(req, res) {
         await Patient.create(req.body, (patient) => {
            const data = {
                 messege: `Menambahka data patient`,
                data: patient, 
         }
            res.json(data)
        })
}
      
      async update(req, res) {
        const { id } = req.params;
        
        //cari id pasien yang ingin di update 
        const patient = await Patient.find(id)

        if (student) {
            //melakukan update data 
            const patient = await patient.update(id, req.body)
            const data = {
                messege : `Mengedit data patients`, 
                data : patient,
            }
            res.status(200).json(data)
        }
        else {
            const data = {
                messege : `patient not found`, 
            }
        }

        res.status(404).json(data);
    }
      
    async destroy(req, res) {
        const { id } = req.params; 
        const patient = await Patient.find(id)

        if (patient) {
            await Patient.delete(id)
            const data = {
                messege: `Menghapus pasien id{id}`,
            }

            res.status(200).json(data)
        } else {
            const data = {
                messege : `Patient not found`
            }

            res.status(404).json(data)
        }

        res.json(data)
}

      
       async show(req, res) {
        const { id } = req.params
        //cari pasien berdasarkan id
        const patient = await Patient.find(id)

        if (patientt) {
            const data = {
                messege : `Menampilkan  detail patients`,
                data  : student,
            }

            res.status(200).json(data)
        } else {
            const data = {
                messege : `Patient not found`
            }

            res.status(404).json(data)
        }
    }
    }
  
  // membuat object PatientController
  const object = new PatientController();
  
  // export object PatientController
  module.exports = object;