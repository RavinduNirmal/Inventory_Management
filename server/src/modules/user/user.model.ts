import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';
import hashPassword from '../../utils/hashPassword';
import { UserRole, UserStatus } from '../../constant/userRole';
import Role from '../role-permission/role.model';

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: 0 },
    title: { type: String },
    description: { type: String },
    avatar: { type: String },
    role: { 
      type: Schema.Types.ObjectId,
      ref: 'Role',
      // required: true       
    },
    status: { type: String, enum: UserStatus, default: 'ACTIVE' },
    address: { type: String },
    phone: { type: String },
    city: { type: String },
    country: { type: String },
    facebook: { type: String },
    twitter: { type: String },
    linkedin: { type: String },
    instagram: { type: String }
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await hashPassword(this.password);
  }

  next();
});


const User = model<IUser>('user', userSchema);
export default User;
