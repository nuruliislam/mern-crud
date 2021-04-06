import mongoose from 'mongoose'

const empSchema = new mongoose.Schema(
    {
        name: { type: String, required: true},
        email: { type: String, required: true, unique: true},
        address: { type: String, required: true},
    },{
        timestamps: true,
    }
);

const Employee= mongoose.model('Employee', empSchema);
export default Employee;