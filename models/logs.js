import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const logSchema = new Schema({
    city: { type: String, required: [true, 'City is a required field'] },
    ip: { type: String, default: '' },
    data: {}
})
// Convert to a model

const Log = mongoose.model('Log', logSchema)

export default Log;