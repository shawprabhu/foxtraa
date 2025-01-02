import mongoose, { Document, Schema } from "mongoose";


interface Message extends Document {
  sender: mongoose.Types.ObjectId; 
  content: string; 
  createdAt: Date; 
}

const MessageSchema: Schema<Message> = new Schema(
  {
    sender: { 
        type: Schema.Types.ObjectId, 
        ref: "User", 
        required: true
    },
    content: {
      type: String,
      required: true,
      maxlength: [1000, "Message cannot be more than 1000 characters long"],
    },
  },
  { timestamps: true } 
);

const MessageModel = (mongoose.models.Message as mongoose.Model<Message>) || mongoose.model<Message>('Message', MessageSchema);

export default MessageModel