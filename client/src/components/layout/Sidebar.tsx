// import {Outlet} from 'react-router-dom';
// import {Layout, Menu} from 'antd';
// import {sidebarItems} from '../../constant/sidebarItems';

// const {Content, Sider} = Layout;

// const Sidebar = () => {
//   return (
//     <Layout style={{height: '100vh'}}>
//       <Sider
//         breakpoint='lg'
//         collapsedWidth='0'
//         width='220px'
//         style={{
//           backgroundColor: '#1877F2',
//           position: 'relative',
//         }}
//       >    
//         <Menu
//           theme='dark'
//           mode='inline'
//           style={{backgroundColor: '#1877F2', fontWeight: '700',marginTop:'40px'}}
//           defaultSelectedKeys={['Dashboard']}
//           items={sidebarItems}
//         />        
//       </Sider>
//       <Layout>
//         <Content style={{padding: '2rem', background: '#FFF'}}>
//           <div
//             style={{
//               padding: '1rem',
//               maxHeight: 'calc(100vh - 4rem)',
//               minHeight: 'calc(100vh - 4rem)',
//               background: '#fff',
//               borderRadius: '1rem',
//               overflow: 'auto',
//             }}
//           >
//             <Outlet />
//           </div>
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default Sidebar;


// import { Outlet } from "react-router-dom";
// import { Layout, Menu } from "antd";
// import { sidebarItems } from "../../constant/sidebarItems";

// const { Content, Sider } = Layout;

// const Sidebar = () => {
//   return (
//     <Layout style={{ height: "100vh" }}>
//       <Sider
//         breakpoint="lg"
//         collapsedWidth="0"
//         width="220px"
//         style={{
//           backgroundColor: "#1877F2",
//           position: "relative",
//         }}
//       >
//         <Menu
//           theme="dark"
//           mode="inline"
//           style={{
//             backgroundColor: "#1877F2",
//             fontWeight: "700",
//             marginTop: "40px",
//             transition: "all 0.3s ease",
//           }}
//           defaultSelectedKeys={["Dashboard"]}
//           items={sidebarItems.map((item) => ({
//             ...item,
//             label: (
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "8px",
//                   fontSize: "13px",
//                   fontWeight: "550",
//                   color: "white",
//                   transition: "all 0.3s ease",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.fontSize = "15px";
//                   e.currentTarget.style.fontWeight = "700";
//                   e.currentTarget.style.color = "white";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.fontSize = "13px";
//                   e.currentTarget.style.fontWeight = "550";
//                   e.currentTarget.style.color = "white";
//                 }}
//               >
//                 <div
//                   style={{
//                     transition: "transform 0.3s ease",
//                     transform: "scale(1)",
//                     marginTop: "7px", 
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = "scale(1.2)"; 
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = "scale(1)"; 
//                   }}
//                 >
//                   {item.icon}
//                 </div>
//                 {item.label}
//               </div>
//             ),
//             icon: null, 
//           }))}
//         />
//       </Sider>
//       <Layout>
//         <Content style={{ padding: "2rem", background: "#FFF" }}>
//           <div
//             style={{
//               padding: "1rem",
//               maxHeight: "calc(100vh - 4rem)",
//               minHeight: "calc(100vh - 4rem)",
//               background: "#fff",
//               borderRadius: "1rem",
//               overflow: "auto",
//             }}
//           >
//             <Outlet />
//           </div>
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default Sidebar;

import { Outlet, useLocation } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import { sidebarItems } from "../../constant/sidebarItems";
import { HomeOutlined } from "@ant-design/icons";

const { Content, Sider } = Layout;

const Sidebar = () => {
  const location = useLocation();

  // Function to generate breadcrumb items based on the current path
  const generateBreadcrumbItems = () => {
    const pathSegments = location.pathname.split("/").filter((segment) => segment);
    return pathSegments.map((segment, index) => {
      const url = `/${pathSegments.slice(0, index + 1).join("/")}`;
      const menuItem = sidebarItems.find((item) => item.key === segment);
      return {
        title: menuItem?.label || segment.charAt(0).toUpperCase() + segment.slice(1),
        href: url,
      };
    });
  };

  const breadcrumbItems = [
    {
      title: (
        <span>
          <HomeOutlined style={{ marginRight: 5 }} />
          Inventory
        </span>
      ),
      href: "/",
    },
    ...generateBreadcrumbItems(),
  ];
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        width="220px"
        style={{
          backgroundColor: "#1877F2",
          position: "relative",
        }}
      >
        <Menu
          theme="dark"
          mode="inline"
          style={{
            backgroundColor: "#1877F2",
            fontWeight: "700",
            marginTop: "40px",
            transition: "all 0.3s ease",
          }}
          defaultSelectedKeys={["Dashboard"]}
          items={sidebarItems.map((item) => ({
            ...item,
            label: (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  fontWeight: "550",
                  color: "white",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.fontSize = "15px";
                  e.currentTarget.style.fontWeight = "700";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.fontSize = "13px";
                  e.currentTarget.style.fontWeight = "550";
                  e.currentTarget.style.color = "white";
                }}
              >
                <div
                  style={{
                    transition: "transform 0.3s ease",
                    transform: "scale(1)",
                    marginTop: "7px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {item.icon}
                </div>
                {item.label}
              </div>
            ),
            icon: null,
          }))}
        />
      </Sider>
      <Layout>
        <Content style={{ padding: "2rem", background: "#FFF" }}>
          <Breadcrumb
            style={{ marginBottom: "0rem" }}
            separator=">"
            items={breadcrumbItems}
          />
          <div
            style={{
              padding: "1rem",
              maxHeight: "calc(100vh - 4rem)",
              minHeight: "calc(100vh - 4rem)",
              background: "#fff",
              borderRadius: "1rem",
              overflow: "auto",
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
