// import Model Patient
const Patient = require("../models/Patient");

// buat class PatientController
class PatientController {
  // buat fungsi
  async index(req,res){
    const patients = await Patient.all();
    
    if(patients.length > 0){
      const data = {
        message : "Get All resource",
        data :patients,
      } ;
      res.status(200).json(data);
    }
      else {
        const data = {
          message : "Data is empty",
        }
        res.status(200).json(data);
      }
    }
    
    async show(req,res){
      const {id}=req.params;

      const patient = await Patient.find(id);

      if(patient){
        const data = {
          message: "Get Detail Resource",
          data : patient,
        }
        res.status(200).json(data);
      }
      else{
        const data = {
          message: "Patient Not Found",
        }
        res.status(404).json(data);
      }
    }
    
    async store (req,res){

      const {name,phone,address,status,in_date_at,out_date_at} = req.body
      if(!name||!phone||!address||!status||!in_date_at||!out_date_at){
        const data = {
          message : "All ﬁelds must be ﬁlled correctly"
        };
        res.status(422).json(data);
      }
      else{
        const patient = await Patient.create(req.body)
        const data = {
          message :"Resource is added successfully",
          data : patient
        }
        res.status(201).json(data)
      }
    }

    async update(req,res){
      const{id} =req.params;

      const patient = await Patient.find(id);

      if(patient){
        const patient = await Patient.update(id,req.body);
        const data = {
          message : "Resource is update successfully",
          data : patient,
        }
        res.status(200).json(data)
      }else{
        const data = {
          message : `Resource not found`,
        }
        res.status(404).json(data);
      }
    }

    async destroy(req,res){
      const{id}=req.params;
      const patient = await Patient.find(id);

      if(patient){
        await Patient.delete(id);
        const data = {
          message : `Resource is delete successfully`
        };
        res.status(200).json(data)
      }else{
        const data = {
          message : `Resource not found`
        }
        res.status(404).json(data);
      }
    }

    async show(req,res){
      const {id}=req.params;

      const patient = await Patient.find(id);

      if(patient){
        const data = {
          message: "Get Detail Resource",
          data : patient,
        }
        res.status(200).json(data);
      }
      else{
        const data = {
          message: "Patient Not Found",
        }
        res.status(404).json(data);
      }
    }

    async search(req,res){
      const {name}=req.params;

      const patientName = await Patient.getByName(name);

      if(patientName){
        const data = {
          message: "Get searched Resource",
          data : patientName,
        }
        res.status(200).json(data);
      }
      else{
        const data = {
          message: "Patient Not Found",
        }
        res.status(404).json(data);
      }
    }

    async positive(req,res){
      const {positive}=req.params;

      const patientPositive = await Patient.getPositive(positive);
      const total = patientPositive.length;

        const data = {
          message: "Get Positive Resource",
          total : total,
          data : patientPositive,
        }
        res.status(200).json(data);
    }
    
    async recovered(req,res){
      const {recovered}=req.params;

      const patientRecovered = await Patient.getRecovered(recovered);
      const total = patientRecovered.length;

        const data = {
          message: "Get Recovered Resource",
          total : total,
          data : patientRecovered,
        }
        res.status(200).json(data);
    }

    async dead(req,res){
      const {dead}=req.params;

      const patientDead = await Patient.getDead(dead);
      const total = patientDead.length;

        const data = {
          message: "Get Dead Resource",
          total : total,
          data : patientDead,
        }
        res.status(200).json(data);
    }

  }
// membuat object PatientController
const object = new PatientController();

// export object PatientController
module.exports = object;
