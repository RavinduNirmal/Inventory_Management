import { TUserRole, TUserStatus } from '../../constant/userRole';
import Role from '../role-permission/role.model';
import { Types } from 'mongoose';
export interface IUser {
  name: string;
  email: string;
  title?: string;
  description?: string;
  role: Types.ObjectId;
  avatar?: string;
  password: string;
  status: TUserStatus;
  address?: string;
  phone?: string;
  city?: string;
  country?: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
}
