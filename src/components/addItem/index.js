import React, { useRef } from 'react'
import { Input, Form, Button } from 'antd'
import './index.js'
import './index.scss'
export default function AddList(props) {
    const { handleListInputAdd } = props
    const inputRef = useRef(null)
    return (
        <Form className="formAddListWrapper" onFinish={() => handleListInputAdd(inputRef.current.props.value)}>
            <Form.Item className="username" name="username" rules={[{ required: true, message: 'Please input what you want to do!' }]}>
                <Input ref={inputRef} placeholder="input things to do" size="large" allowClear></Input>
            </Form.Item>
            <Form.Item>
                <Button className="listAddButton" type="primary" htmlType="submit">
                    Add
                </Button>
            </Form.Item>
        </Form>
    )
}
