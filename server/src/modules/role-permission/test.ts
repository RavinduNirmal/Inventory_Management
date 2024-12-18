import User from '../user/user.model';
import Role from './role.model';
import RolePermission from './rolepermission.model';
import { ObjectId } from 'mongoose';

export async function getUserPermissions(userId: ObjectId) {
  try {
    // Find the user's role
    const user = await User.findById(userId).populate('role');
    if (!user) {
      throw new Error('User not found');
    }
    console.log('User:', user);

    // Get all permissions for the user's role
    const rolePermissions = await RolePermission.find({ role: user.role._id })
      .populate('permission', 'name')
      .populate('resource', 'name');

    const role = await Role.find({ _id: user.role._id });

    return { rolePermissions, role };
  } catch (error) {
    throw new Error(`Error getting user permissions: ${error}`);
  }
}


