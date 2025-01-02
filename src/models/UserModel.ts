import mongoose,{Schema,Document} from "mongoose";

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    otp: string | null ;
    otpExpiry: Date ;
    otpLimit: number;
    isVerified: boolean;
    profilePic?: string
}

const UserSchema: Schema<User> = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    otp:{
        type: String,
    },
    otpExpiry:{
        type: Date,
        default: new Date(Date.now() + 60 * 60 * 1000)
    },
    otpLimit:{
        type: Number,
        default: 3
    },    
    isVerified: {
        type: Boolean,
        default: false
    },
    profilePic: {
        type: String
    }
},{timestamps: true}
)

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel; 