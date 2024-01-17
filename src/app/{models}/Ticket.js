import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
    {
        title: { type: String, required: [true, 'Title is required'], trim: true, min: [3, 'Title must have atleast 3 characters'], max: [20, 'Title cannot surpass 20 characters'] },
        description: { type: String, required: [true, 'Description is required'] },
        category: { type: String, required: [true, 'Category is required'] },
        priority: { type: Number, required: [true, 'Priority is required'], min: [1, 'Proirity cannot be less than 1'], max: [5, 'Priority cannot be more than 5'] },
        progress: { type: Number, required: [true, 'Progress is required'], min: [0, 'Progress cannot be less than 0'], max: [100, 'Progress cannot be more than 100'] },
        status: { type: String, required: [true, 'Status is required'] },
        active: { type: Boolean, required: [true, 'Active status cannot be empty'], default: true }
    },
    {
        timestamps: true,
    }
);

const Ticket = mongoose.models.ticket || mongoose.model('ticket', ticketSchema);
export default Ticket;