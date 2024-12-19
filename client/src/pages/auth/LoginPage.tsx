import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { Button, Checkbox, Form, Input, Typography, Grid, theme, Layout, Col, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import toastMessage from "../../lib/toastMessage";
import { useLoginMutation } from "../../redux/features/authApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loginUser } from "../../redux/services/authSlice";
import decodeToken from "../../utils/decodeToken";
import { CSSProperties } from "react";
import userProPic from '../../assets/woman-preparing-boxes-shipment.jpg';

const { useToken } = theme;
const { Text, Title } = Typography;
const { useBreakpoint } = Grid;

const LoginPage = () => {
  const [userLogin] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { token } = useToken();
  const screens = useBreakpoint();
  const isAuthenticated = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const onFinish = async (data: any) => {
    const toastId = toast.loading("Logging...");
    try {
      const res = await userLogin(data).unwrap();
      if (res.statusCode === 200) {
        const user = decodeToken(res.data.token);
        dispatch(loginUser({ token: res.data.token, user }));
        toast.success("Successfully Login!", { id: toastId });
        toast.dismiss(toastId);
        navigate("/");
      }
    } catch (error: any) {
      toast.dismiss(toastId);
      toastMessage({ icon: "error", text: error.data.message });
    }
  };

  const styles: { [key: string]: CSSProperties } = {
    container: {
      margin: "0 auto",
      padding: screens.md ? `${token.paddingXL}px` : `${token.sizeXXL}px ${token.padding}px`,
      width: "380px",
    },
    section: {
      display: "flex",
      alignItems: "center",
      backgroundColor: token.colorBgContainer,
      height: "100vh",
      paddingTop: 0,
      paddingBottom:0,
      overflow: "hidden", 
    },
    header: {
      marginBottom: token.marginXL,
      textAlign: "center" as CSSProperties["textAlign"],
    },
    footer: {
      marginTop: token.marginLG,
      textAlign: "center" as CSSProperties["textAlign"],
    },
    text: {
      color: token.colorTextSecondary,
    },
    image: {
      width: "200%",
      height: "100%",
      objectFit: "cover",
    },
  };

  return (
    <Layout style={styles.section}>
      <Row style={{ flex: 1 }}>
        <Col flex="1" style={{ padding: 0 }}>
          <img
            src={userProPic} 
            alt="Sample"
            style={styles.image}
          />
        </Col>
        <Col flex="2" style={{ paddingLeft: 400,paddingTop:100 }}>
          <div style={styles.container}>
            <div style={styles.header}>
              <Title level={3}>Login</Title>
              <Text style={styles.text}>Welcome back! Please enter your details below to log in.</Text>
            </div>
            <Form
              name="login"
              layout="vertical"
              requiredMark="optional"
              onFinish={onFinish}
              initialValues={{
                email: "ravindu.nirmal099@gmail.com",
                password: "Sample12*",
              }}
            >
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Please enter your email!",
                  },
                ]}
              >
                <Input placeholder="Email" 
                  prefix={<MailOutlined style={{marginRight:'5px'}}/>}/>
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your password!",
                  },
                ]}
              >
                <Input.Password placeholder="Password"
                prefix={<LockOutlined style={{marginRight:'5px'}}/>}  />
              </Form.Item>
              <Form.Item>
                <Checkbox defaultChecked>Remember me</Checkbox>
                <Link style={{ float: "right" }} to="/forgot-password">
                  Forgot password?
                </Link>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Login
                </Button>
              </Form.Item>
            </Form>
            <div style={styles.footer}>
              <Text style={styles.text}>Don't have an account?</Text> <Link to="/register">Register Here</Link>
            </div>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default LoginPage;


