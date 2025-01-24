import "next-auth"
import {DefaultSession} from "next-auth"

interface Credentials {
  identifier: string;
  password: string;
}

interface User {
  _id?: string;
  username?: string;
  isVerified?: boolean;
  email?: string;
}


declare module "next-auth" {
    interface User {
        _id?: string;
        username?: string;
        isVerified?: boolean;
        email?: string;
    }

    interface Session {
        user:{
            _id?: string;
            username?: string;
            isVerified?: boolean;
            email?: string;
            isVerified?: boolean;
        }& DefaultSession["user"]
    }
}

declare module "next-auth/jwt" {
    interface JWT{
        _id?: string;
        username?: string;
        isVerified?: boolean;
        username?: string;
    }
}