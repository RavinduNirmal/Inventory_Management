import { Link,useNavigate } from 'react-router-dom';
import './NavBar.css';
import { UserOutlined,LogoutOutlined,BellFilled } from '@ant-design/icons';
import { Avatar,Row,Col } from 'antd';
import {useAppDispatch} from '../../redux/hooks';
import {logoutUser} from '../../redux/services/authSlice';
import userProPic from '../../assets/logo.png';

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
          <Row
            gutter={14}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "row-reverse",
            }}
          >
            <Col style={{ marginRight: "1px" }}>
              <h2
                style={{
                  color: "#fff",
                  padding: "1rem 0",
                  fontSize: "1.4rem",
                  textAlign: "left",
                }}
              >
                INVENTORY
              </h2>
            </Col>
            <Col>
              <img
                src={userProPic}
                alt="logo"
                style={{
                  width: "30px",
                  height: "30px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </Col>
          </Row>
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
                fontSize: "1.2rem",
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


