import express from 'express';
import expressAsyncHandler from "express-async-handler";
import Employee from '../models/employeeModel.js';

const userRouter = express.Router();

userRouter.post('/add', expressAsyncHandler( async( req, res) =>{

    const empl = new Employee(req.body);
    const newEmpl = await empl.save();

    res.send(newEmpl)
    console.log(newEmpl)
}))

userRouter.put('/:id', expressAsyncHandler( async( req, res) =>{
    console.log('put')
    console.log(req);

    const employee = await Employee.findById(req.body._id);
    // console.log(employee)
    
    if(employee){
        employee.name = req.body.name || employee.name;
        employee.email = req.body.email || employee.email;
        employee.address = req.body.address || employee.address;
    }

    const updatedUser = await employee.save();
    res.send({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        address: updatedUser.address,
    })
}))


userRouter.get('/', expressAsyncHandler(async(req, res) =>{
    const data = await Employee.find({});
    res.send(data);
}))

userRouter.get('/:id', expressAsyncHandler(async(req, res) =>{
    const data =  await Employee.findById(req.params.id);
    res.send(data);
}))


userRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    const newUser = await Employee.insertMany(data.employee)
    res.send(newUser);
}));

userRouter.delete('/:id',expressAsyncHandler(async(req,res) => {
    const empl = await Employee.findById(req.params.id);
    const deletedEmpl = await empl.remove();
    res.send({ message: 'Employee Deleted', data: deletedEmpl });

}))



export default userRouter;
