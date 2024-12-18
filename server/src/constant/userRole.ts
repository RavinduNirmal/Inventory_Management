export const UserRole = {
  SUPERADMIN: 'SUPERADMIN',
  ADMIN: 'ADMIN',
  USER: 'USER',
  VENDOR: 'VENDOR',
  CUSTOMER: 'CUSTOMER'
  
} as const;

export const UserStatus = {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  BLOCK: 'BLOCK'
} as const;

export type TUserRole = 'SUPERADMIN' | 'ADMIN' | 'USER' | 'USER'| 'VENDOR' | 'CUSTOMER';
export type TUserStatus = 'PENDING' | 'ACTIVE' | 'BLOCK';
