import React from 'react'
import { Switch, Row, Col, Button, Popconfirm, message } from 'antd'
import './index.scss'
export default function ToDoItem(props) {
    const { index, value, onCheckedChange, handleModalShow, handleDelete } = props

    function cancel() {
        message.error('Cancel')
    }

    return (
        <>
            <Row className="toDoListMain">
                <Col span={2}>
                    <Switch onChange={(e) => onCheckedChange(index, e)} checkedChildren="yes" unCheckedChildren="no"></Switch>
                </Col>
                <Col offset={2} span={7} className="content">
                    {value}
                </Col>
                <Col offset={2} span={3}>
                    <Button type="primary" onClick={() => handleModalShow(index, 'detail')}>
                        查看
                    </Button>
                </Col>
                <Col offset={1} span={3}>
                    <Button default onClick={() => handleModalShow(index, 'edit')}>
                        编辑
                    </Button>
                </Col>
                <Col span={3} offset={1}>
                    <Popconfirm placement="topRight" title="Are you sure to delete this?" onConfirm={() => handleDelete(index)} onCancel={cancel} okText="Yes" cancelText="No">
                        <Button danger>删除</Button>
                    </Popconfirm>
                </Col>
            </Row>
        </>
    )
}
