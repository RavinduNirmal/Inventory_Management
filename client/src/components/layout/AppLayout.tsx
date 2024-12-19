import Sidebar from './Sidebar';
import Navbar from '../NavBar/NavBar';

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", marginTop: "60px" }}>
        <Sidebar />
      </div>
    </div>
  );
};

export default AppLayout;
