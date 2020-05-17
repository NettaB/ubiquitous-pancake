import { Schema, Document } from 'mongoose';
import * as mongoose from 'mongoose';

interface ITask extends Document {
  id: string;
  description: string;
  assignee: string | null;
  isDone: boolean;
  dueDate: Date;
}

const taskSchema: Schema = new Schema({
  id: { type: mongoose['ObjectId'], required: true },
  description: { type: String, required: true },
  assignee: String,
  isDone: { type: Boolean, default: false },
  dueDate: Date,
});

export const TodayTask = mongoose.model<ITask>(
  'TodayTask',
  taskSchema,
  'todayTasks'
);
export const LongtermTask = mongoose.model<ITask>(
  'LongtermTask',
  taskSchema,
  'longtermTasks'
);
