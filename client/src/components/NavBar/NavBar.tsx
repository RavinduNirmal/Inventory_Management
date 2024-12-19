import { Link,useNavigate } from 'react-router-dom';
import './NavBar.css';
import { UserOutlined,LogoutOutlined,BellFilled } from '@ant-design/icons';
import { Avatar } from 'antd';
import {useAppDispatch} from '../../redux/hooks';
import {logoutUser} from '../../redux/services/authSlice';


const Navbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <h1
            style={{
              color: "#fff",
              padding: "1rem",
              fontSize: "1.8rem",
              textAlign: "center",
            }}
          >
            INVENTORY
          </h1>
        </Link>
      </div>
      <nav className="navbar-links">
        <Link
          to="/notification"
          style={{
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <span
            style={{
              display: "inline-block",
              paddingTop: "5px",
            }}
          >
            <BellFilled
              style={{
                fontSize: "1.3rem",
                marginRight: "5px",
                color: "inherit",
              }}
            />
          </span>
        </Link>

        <Link to="/profile">
          <Avatar
            style={{
              backgroundColor: "#ffffff",
              color: "#000000",
              marginRight: "10px",
            }}
            icon={<UserOutlined />}
          />
        </Link>
        <Link
          to="/login"
          style={{
            fontWeight: 600,
            textTransform: "uppercase",
            color: "inherit",
            textDecoration: "none",
          }}
          onClick={handleClick}
        >
          LOGOUT
        </Link>
        <LogoutOutlined />
      </nav>
    </header>
  );
};

export default Navbar;


