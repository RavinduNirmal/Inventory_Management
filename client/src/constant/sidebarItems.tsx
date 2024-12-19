// import {
//   AimOutlined,
//   AntDesignOutlined,
//   ApartmentOutlined,
//   AreaChartOutlined,
//   MoneyCollectFilled,
//   ProfileFilled,
// } from '@ant-design/icons';
// import React from 'react';
// import { NavLink } from 'react-router-dom';

// export const sidebarItems = [
//   {
//     key: 'Dashboard',
//     label: <NavLink to='/'>DASHBOARD</NavLink>,
//     icon: React.createElement(ProfileFilled),
//   },
//   {
//     key: 'Add Product',
//     label: <NavLink to='/create-product'>ADD PRODUCT</NavLink>,
//     icon: React.createElement(AntDesignOutlined),
//   },
//   {
//     key: 'Manage Products',
//     label: <NavLink to='/products'>MANAGE PRODUCTS</NavLink>,
//     icon: React.createElement(MoneyCollectFilled),
//   },
//   {
//     key: 'Manage Sales',
//     label: <NavLink to='/sales'>MANAGE SALES</NavLink>,
//     icon: React.createElement(AreaChartOutlined),
//   },
//   {
//     key: 'Manage Seller',
//     label: <NavLink to='/sellers'>MANAGE SELLERS</NavLink>,
//     icon: React.createElement(ApartmentOutlined),
//   },
//   {
//     key: 'Manage Purchase',
//     label: <NavLink to='/purchases'>MANAGE PURCHASES</NavLink>,
//     icon: React.createElement(AimOutlined),
//   },
//   // {
//   //   key: 'Sales History',
//   //   label: <NavLink to='/sales-history'>SALES HISTORY</NavLink>,
//   //   icon: React.createElement(HistoryOutlined),
//   // },
  
// ];



import {
  AimOutlined,
  AntDesignOutlined,
  ApartmentOutlined,
  AreaChartOutlined,
  MoneyCollectFilled,
  ProfileFilled,
} from '@ant-design/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const sidebarItems = [
  {
    key: 'Dashboard',
    label: (
      <NavLink to='/' style={{ fontSize: '13px', fontWeight: '550' }}>
        DASHBOARD
      </NavLink>
    ),
    icon: React.createElement(ProfileFilled, { style: { fontSize: '25px' } }),
  },
  {
    key: 'Add Product',
    label: (
      <NavLink to='/create-product' style={{ fontSize: '13px', fontWeight: '550' }}>
        ADD PRODUCT
      </NavLink>
    ),
    icon: React.createElement(AntDesignOutlined, { style: { fontSize: '25px' } }),
  },
  {
    key: 'Manage Products',
    label: (
      <NavLink to='/products' style={{ fontSize: '13px', fontWeight: '550' }}>
        MANAGE PRODUCTS
      </NavLink>
    ),
    icon: React.createElement(MoneyCollectFilled, { style: { fontSize: '25px' } }),
  },
  {
    key: 'Manage Sales',
    label: (
      <NavLink to='/sales' style={{ fontSize: '13px', fontWeight: '550' }}>
        MANAGE SALES
      </NavLink>
    ),
    icon: React.createElement(AreaChartOutlined, { style: { fontSize: '25px' } }),
  },
  {
    key: 'Manage Seller',
    label: (
      <NavLink to='/sellers' style={{ fontSize: '13px', fontWeight: '550' }}>
        MANAGE SELLERS
      </NavLink>
    ),
    icon: React.createElement(ApartmentOutlined, { style: { fontSize: '25px' } }),
  },
  {
    key: 'Manage Purchase',
    label: (
      <NavLink to='/purchases' style={{ fontSize: '13px', fontWeight: '550' }}>
        MANAGE PURCHASES
      </NavLink>
    ),
    icon: React.createElement(AimOutlined, { style: { fontSize: '25px' } }),
  },
];


// import {
//   AimOutlined,
//   AntDesignOutlined,
//   ApartmentOutlined,
//   AreaChartOutlined,
//   MoneyCollectFilled,
//   ProfileFilled,
// } from '@ant-design/icons';
// import React from 'react';
// import { NavLink } from 'react-router-dom';

// export const sidebarItems = [
//   {
//     key: 'Dashboard',
//     label: (
//       <NavLink
//         to='/'
//         style={{
//           fontSize: '14px',
//           fontWeight: '550',
//           fontFamily: "'Roboto', sans-serif",
//         }}
//       >
//         DASHBOARD
//       </NavLink>
//     ),
//     icon: React.createElement(ProfileFilled, { style: { fontSize: '25px' } }),
//   },
//   {
//     key: 'Add Product',
//     label: (
//       <NavLink
//         to='/create-product'
//         style={{
//           fontSize: '14px',
//           fontWeight: '550',
//           fontFamily: "'Roboto', sans-serif",
//         }}
//       >
//         ADD PRODUCT
//       </NavLink>
//     ),
//     icon: React.createElement(AntDesignOutlined, { style: { fontSize: '25px' } }),
//   },
//   {
//     key: 'Manage Products',
//     label: (
//       <NavLink
//         to='/products'
//         style={{
//           fontSize: '14px',
//           fontWeight: '550',
//           fontFamily: "'Roboto', sans-serif",
//         }}
//       >
//         MANAGE PRODUCTS
//       </NavLink>
//     ),
//     icon: React.createElement(MoneyCollectFilled, { style: { fontSize: '25px' } }),
//   },
//   {
//     key: 'Manage Sales',
//     label: (
//       <NavLink
//         to='/sales'
//         style={{
//           fontSize: '14px',
//           fontWeight: '550',
//           fontFamily: "'Roboto', sans-serif",
//         }}
//       >
//         MANAGE SALES
//       </NavLink>
//     ),
//     icon: React.createElement(AreaChartOutlined, { style: { fontSize: '25px' } }),
//   },
//   {
//     key: 'Manage Seller',
//     label: (
//       <NavLink
//         to='/sellers'
//         style={{
//           fontSize: '14px',
//           fontWeight: '550',
//           fontFamily: "'Roboto', sans-serif",
//         }}
//       >
//         MANAGE SELLERS
//       </NavLink>
//     ),
//     icon: React.createElement(ApartmentOutlined, { style: { fontSize: '25px' } }),
//   },
//   {
//     key: 'Manage Purchase',
//     label: (
//       <NavLink
//         to='/purchases'
//         style={{
//           fontSize: '14px',
//           fontWeight: '550',
//           fontFamily: "'Roboto', sans-serif",
//         }}
//       >
//         MANAGE PURCHASES
//       </NavLink>
//     ),
//     icon: React.createElement(AimOutlined, { style: { fontSize: '25px' } }),
//   },
// ];
