import { HydratedDocument, Model } from "mongoose";

   // 1. Create an interface representing a document in MongoDB.
   export interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
        firstName: string;
        middleName?: string;
        lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNumber: string;
    emergencyContact: string;
    presentAddress: string;
    permanentAddress: string;
}

//static
// interface UserModel extends Model<IUser> {
//     myStaticMethod(): IUser[];
//   }

  //instance method
export interface IUserMethods {
    fullName(): string;
  }

 export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
  }
  