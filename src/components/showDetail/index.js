import React from 'react'
import { Row, Col, Modal, Button } from 'antd'

export default function ShowDetailModal(props) {
    const { data, isModalVisible, handleDetailModalShow, handleCancel } = props
    return (
        <Modal
            onCancel={() => handleCancel(!isModalVisible, 'detail')}
            footer={[
                <Button key="submit" type="primary" onClick={() => handleDetailModalShow(false)}>
                    Confirm
                </Button>,
            ]}
            title="Detail"
            visible={isModalVisible}
        >
            <Row>
                <Col span={6}>Time:&nbsp;&nbsp;</Col>
                <Col>{data.id}</Col>
            </Row>
            <Row>
                <Col span={6}>Content:&nbsp;&nbsp;</Col>
                <Col>{data.value}</Col>
            </Row>
            <Row>
                <Col span={6}>Finished:&nbsp;&nbsp;</Col>
                <Col>{String(data.completed) === 'true' ? '已完成' : ' 待做'}</Col>
            </Row>
        </Modal>
    )
}
