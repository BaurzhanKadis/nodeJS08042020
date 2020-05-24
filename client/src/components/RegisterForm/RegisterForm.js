import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useHttp } from '../../hooks/http.hooks';

import { Form, Input, Tooltip, Button, message } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const RegisterForm = () => {
  const {loading, request } = useHttp();
  const [ form, setForm ] = useState();

  const changeHendler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    // const data = await request('/api/auth/register', 'POST', {...values});
    // console.log("DATA", data)
  };
  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form});
      message.warning(data.message)
    } catch (e) {
      message.warning(e.message)
    }
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };



  return (
    <React.Fragment>
        <div className="auth__top">
          <h2>Регистрация</h2>
          <p>Для входа в чат, Вам нужно зарегистрироваться</p>
        </div>
        <Form
          {...formItemLayout}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            onChange={changeHendler}
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input name="email" 
            onChange={changeHendler}
            />
          </Form.Item>

          <Form.Item
            name="password"
            onChange={changeHendler}
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password name="password" 
            onChange={changeHendler}
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="nickname"
            onChange={changeHendler}
            label={
              <span>
                Nickname&nbsp;
                <Tooltip title="What do you want others to call you?">
                  <QuestionCircleOutlined />
                </Tooltip>
              </span>
            }
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input name="nickname" onChange={changeHendler}/>
          </Form.Item>        
          
          <Form.Item {...tailFormItemLayout}>
            <Button 
              type="primary"
              onClick={registerHandler}
              disabled={loading} 
              htmlType="submit">
              Register
            </Button>
            <div>Or</div>
            <Link 
              className="primary" 
              to="/login"
              disabled={loading}
              >
              Log in
            </Link>
          </Form.Item>
        </Form>
      </React.Fragment>
  );
};
export default RegisterForm;

// class RegisterForm extends Component {
//   state = {};
//   render() {
//     const { loading, request } = useHttp();
//     const registerHandler = async () => {
//       try {
//         const data = await request('/api/auth/registration', 'POST', this.state);
//         console.log("DATA", data)
//       } catch (e) {

//       }
//     };
//     const formItemLayout = {
//       labelCol: {
//         xs: { span: 24 },
//         sm: { span: 8 },
//       },
//       wrapperCol: {
//         xs: { span: 24 },
//         sm: { span: 16 },
//       },
//     };
//     const tailFormItemLayout = {
//       wrapperCol: {
//         xs: {
//           span: 24,
//           offset: 0,
//         },
//         sm: {
//           span: 16,
//           offset: 8,
//         },
//       },
//     };

//     const onFinish = (values) => {
//       this.setState(values)
//       console.log("Received values of form: ", values);
//       console.log(this.state);
//     };
//     return (
//       <React.Fragment>
//         <div className="auth__top">
//           <h2>Регистрация</h2>
//           <p>Для входа в чат, Вам нужно арегистрироваться</p>
//         </div>
//         <Form
//           {...formItemLayout}
//           name="register"
//           onFinish={onFinish}
//           initialValues={{
//             residence: ["zhejiang", "hangzhou", "xihu"],
//             prefix: "86",
//           }}
//           scrollToFirstError
//         >
//           <Form.Item
//             name="email"
//             // onChange={this.changeHendler}
//             label="E-mail"
//             rules={[
//               {
//                 type: "email",
//                 message: "The input is not valid E-mail!",
//               },
//               {
//                 required: true,
//                 message: "Please input your E-mail!",
//               },
//             ]}
//           >
//             <Input />
//           </Form.Item>

//           <Form.Item
//             name="password"
//             // onChange={changeHendler}
//             label="Password"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your password!",
//               },
//             ]}
//             hasFeedback
//           >
//             <Input.Password />
//           </Form.Item>

//           <Form.Item
//             name="confirm"
//             label="Confirm Password"
//             dependencies={["password"]}
//             hasFeedback
//             rules={[
//               {
//                 required: true,
//                 message: "Please confirm your password!",
//               },
//               ({ getFieldValue }) => ({
//                 validator(rule, value) {
//                   if (!value || getFieldValue("password") === value) {
//                     return Promise.resolve();
//                   }
//                   return Promise.reject(
//                     "The two passwords that you entered do not match!"
//                   );
//                 },
//               }),
//             ]}
//           >
//             <Input.Password />
//           </Form.Item>

//           <Form.Item
//             name="nickname"
//             // onChange={changeHendler}
//             label={
//               <span>
//                 Nickname&nbsp;
//                 <Tooltip title="What do you want others to call you?">
//                   <QuestionCircleOutlined />
//                 </Tooltip>
//               </span>
//             }
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your nickname!",
//                 whitespace: true,
//               },
//             ]}
//           >
//             <Input />
//           </Form.Item>        
          
//           <Form.Item {...tailFormItemLayout}>
//             <Button 
//               type="primary"
//               onClick={registerHandler}
//               disabled={loading} 
//               htmlType="submit">
//               Register
//             </Button>
//             <div>Or</div>
//             <Link 
//               className="primary" 
//               to="/login"
//               disabled={loading}>
//               Log in
//             </Link>
//           </Form.Item>
//         </Form>
//       </React.Fragment>
//     );
//   }
// }

// export default RegisterForm;
