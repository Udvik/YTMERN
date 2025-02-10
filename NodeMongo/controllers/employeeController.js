const Employee = require('../models/Employee')

const createEmployee = async(req,res) => {
    try{
        const {name,email,phone,city} = req.body;

        const newEmployee = new Employee({name,email,phone,city})
        await newEmployee.save();
        res.status(201).json(newEmployee);
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

const getEmployees = async(req,res)=> {
    try{
        const employees = await Employee.find();
        res.json(employees);
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

const singleEmployee = async(req,res)=>{
    try{
        const employee = await Employee.findBYId(req.params.id);
        res.status(200).json(employee);
    }catch(err){
        res.status(404).json({error:err.message})
    }
}

const updateEmployee = async(req,res)=>{
    try{
        const {name,email,phone,city} = req.body

        const myEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            {name,email,phone,city},
            {new:true}
        )
        if(!myEmployee){
            return res.status(404).json({message:"Employee not found"})
        }
    }catch(err){
        console.log('There is an error')
        res.status(400).json(error.message)
    }
}

const deleteEmployee = async(req,res)=>{
    try{
        const deleteEmployee = await Employee.findByIDAndDelete(req,params.id)
        res.status(200).send()
    }catch(err){
        console.error('There is an error')
        res.status(400).json(error.message)
    }
}

module.exports = {createEmployee,getEmployees,singleEmployee,updateEmployee,deleteEmployee}

