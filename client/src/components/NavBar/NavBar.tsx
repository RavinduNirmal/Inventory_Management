import { Link } from 'react-router-dom';
import './NavBar.css';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <Link to="/">
        <h1 style={{color: '#fff', padding: '1rem', fontSize: '1.8rem', textAlign: 'center'}}>
            INVENTORY
          </h1>
        </Link>
      </div>
      <nav className="navbar-links">
        <Link to="/profile">
        <Avatar style={{ backgroundColor: '#f56a00' }} icon={<UserOutlined />} />
        </Link>
        <Link to="/logout">Logout</Link>
      </nav>
    </header>
  );
};

export default Navbar;
