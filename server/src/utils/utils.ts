import Role from '../modules/role-permission/role.model'; // Role model
import Permission from '../modules/role-permission/permission.model'; // Permission model
import Resource from '../modules/role-permission/resource.model'; // Resource model
import RolePermission from '../modules/role-permission/rolepermission.model'; // RolePermission model

export const initialUser = async () => {
  try {
    // Create roles
    const roles = ['ADMIN', 'USER'];
    for (const roleName of roles) {
      const roleExists = await Role.findOne({ name: roleName });
      if (!roleExists) {
        await Role.create({ name: roleName });
        console.log(`Role ${roleName} created`);
      }
    }

    // Create permissions
    const permissions = ['READ', 'WRITE', 'DELETE'];
    for (const permissionName of permissions) {
      const permissionExists = await Permission.findOne({ name: permissionName });
      if (!permissionExists) {
        await Permission.create({ name: permissionName });
        console.log(`Permission ${permissionName} created`);
      }
    }

    // Create resources
    const resources = ['USER', 'POST', 'COMMENT'];
    for (const resourceName of resources) {
      const resourceExists = await Resource.findOne({ name: resourceName });
      if (!resourceExists) {
        await Resource.create({ name: resourceName });
        console.log(`Resource ${resourceName} created`);
      }
    }

    // Assign permissions to roles (RolePermission)
    const adminRole = await Role.findOne({ name: 'ADMIN' });
    const userRole = await Role.findOne({ name: 'USER' });
    const allPermissions = await Permission.find();
    const allResources = await Resource.find();

    if (adminRole && userRole) {
      for (const permission of allPermissions) {
        for (const resource of allResources) {
          const adminPermissionExists = await RolePermission.findOne({
            role: adminRole._id,
            permission: permission._id,
            resource: resource._id,
          });
          if (!adminPermissionExists) {
            await RolePermission.create({
              role: adminRole._id,
              permission: permission._id,
              resource: resource._id,
            });
            console.log(`Admin permission ${permission.name} for ${resource.name} created`);
          }

          const userPermissionExists = await RolePermission.findOne({
            role: userRole._id,
            permission: permission._id,
            resource: resource._id,
          });
          if (!userPermissionExists && permission.name === 'READ') {
            await RolePermission.create({
              role: userRole._id,
              permission: permission._id,
              resource: resource._id,
            });
            console.log(`User permission ${permission.name} for ${resource.name} created`);
          }
        }
      }
    }
  } catch (err) {
    console.error('Error initializing roles, permissions, and resources:', err);
  }
};
