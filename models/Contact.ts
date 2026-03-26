import mongoose, { Schema, Document } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  mobile: string;
  sessionType: string;
  dateLocation: string;
  message?: string;
}

const ContactSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    sessionType: { type: String, required: true },
    dateLocation: { type: String, required: true },
    message: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);
