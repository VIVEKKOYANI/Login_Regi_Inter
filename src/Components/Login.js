import React, { useState } from 'react'
import { Form, Input, Button } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [info, setInfo] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem('auth');
        console.log("auth", data);
        setInfo(data);
    }, [info])


    const onFinish = (values) => {
        console.log('Success:', values);
        let data = localStorage.getItem('auth');
        const leed = JSON.parse(data);
        console.log("leed", leed);
        const checkpassword = leed.find(item => item.password === values.password && item.email === values.email);
        console.log("checkpassword", checkpassword);
        if(checkpassword){
            navigate('/deshboard')
            localStorage.setItem('isAuthenticated', true)
        }
    };

    

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >

            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Login