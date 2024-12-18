import { Schema, model } from 'mongoose';

const rolePermissionSchema = new Schema({
  role: {
    type: Schema.Types.ObjectId,
    ref: 'Role',
    required: true,
    index: true // Index for fast lookup
  },
  permission: {
    type: Schema.Types.ObjectId,
    ref: 'Permission',
    required: true,
    index: true // Index for fast lookup
  },
  resource: {
    type: Schema.Types.ObjectId,
    ref: 'Resource',
    required: true,
    index: true // Index for fast lookup
  }
}, { timestamps: true });

const RolePermission = model('RolePermission', rolePermissionSchema);
export default RolePermission;
