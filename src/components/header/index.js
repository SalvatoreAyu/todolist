import { React } from 'react'
import { Row, Col } from 'antd'
import './index.js'
import './index.scss'
import { PlusSquareOutlined, BookOutlined } from '@ant-design/icons'

export default function Header(props) {
    const { showAddList, handleListAddButton } = props
    return (
        <>
            <Row className="header">
                <Col span={4} className="logo" style={{ fontSize: '1.5rem' }}>
                    <BookOutlined />
                </Col>
                <Col span={16} className="mainTitle">
                    <h1>todoList</h1>
                </Col>
                <Col span={4} className="search">
                    <PlusSquareOutlined onClick={() => handleListAddButton(!showAddList)} style={{ fontSize: '1.5rem' }} />
                </Col>
            </Row>
        </>
    )
}
// export default function TopBar() {
//     const [showAddList, setShowAddList] = useState(true)
//     const [toDoList, setToDoList] = useState([])

//     const handleListInputAdd = (value) => {
//         const newItem = {
//             id: new Date().getTime(),
//             value: value,
//             completed: false,
//         }
//         setToDoList((toDoList) => [...toDoList, newItem])
//         // setShowAddList(!showAddList)
//     }
//     return (
//         <>
//             <Header showAddList={showAddList} handleListAddButton={(value) => setShowAddList(value)}></Header>
//             {showAddList && <AddList handleListInputAdd={(value) => handleListInputAdd(value)}></AddList>}
//         </>
//     )
// }
