import React, { useRef } from 'react'
import { Row, Col, Modal, Button } from 'antd'
// const { TextArea } = Input
export default function ShowEditModal(props) {
    const { data, isEditModalVisible, handleEditModalShow, handleCancel } = props
    const inputRef = useRef(null)
    return (
        <Modal
            onCancel={() => handleCancel(!isEditModalVisible, 'edit')}
            footer={[
                <Button key="submit" type="primary" onClick={() => handleEditModalShow(inputRef.current.value, false)}>
                    Confirm
                </Button>,
            ]}
            title="Edit"
            visible={isEditModalVisible}
        >
            <Row>
                <Col span={6}>Time:</Col>
                <Col span={18}>{data.id} </Col>
            </Row>
            <Row>
                <Col span={6}>Content:</Col>
                <Col>
                    <textarea key={data.id} ref={inputRef} defaultValue={data.value}></textarea>
                </Col>
            </Row>
            <Row>
                <Col span={6}>Finished:</Col>
                <Col>{String(data.completed)}</Col>
            </Row>
        </Modal>
    )
}
