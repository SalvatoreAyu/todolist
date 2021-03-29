import './App.css'
import MyHeader from './components/header'
import { message } from 'antd'
import { hot } from 'react-hot-loader/root'
import { Layout } from 'antd'
import { useState } from 'react'
import AddList from './components/addItem'
import ToDoItem from './components/toDoItem'
import ShowDetailModal from './components/showDetail'
import ShowEditModal from './components/editModal'
const { Header, Footer, Content } = Layout
function App() {
    const [showAddList, setShowAddList] = useState(true)
    const [toDoList, setToDoList] = useState([
        { id: 1616834063541, value: 'this is just for a test', completed: false },
        { id: 1616924043572, value: '我要去踢足球', completed: false },
        { id: 1616934063263, value: '去洗个澡吧', completed: false },
        { id: 1616944063544, value: '打两把紧张刺激的大乱斗', completed: false },
    ])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isEditModalVisible, setIsEditModalVisible] = useState(false)
    const [currentData, setCurrentData] = useState({ id: null, value: null, completed: null })
    const handleListInputAdd = (value) => {
        const newItem = {
            id: new Date().getTime(),
            value: value,
            completed: false,
        }
        setToDoList((toDoList) => [...toDoList, newItem])
        // setShowAddList(!showAddList)
    }
    const onCheckedChange = (id, flag) => {
        const data = toDoList.filter((item) => item.id === id)[0]
        data.completed = flag
    }
    const handleDetailModalShow = (value) => {
        setIsModalVisible(value)
    }
    const handleEditModalShow = (value, flag) => {
        // setIsEditModalVisible(value)
        // console.log(value, flag)
        // console.log(currentData.value)
        currentData.value = value || ''
        // currentData.value = value
        // console.log(value)
        setIsEditModalVisible(flag)
    }
    const openModal = (id, type) => {
        const data = toDoList.filter((item) => item.id === id)[0]
        setCurrentData(data)
        // setEditNewValue(currentData.value)
        if (type === 'detail') {
            setIsModalVisible(!isModalVisible)
        } else {
            setIsEditModalVisible(!isEditModalVisible)
        }
    }
    const handleDelete = (id) => {
        const data = toDoList.filter((item) => item.id !== id)
        setToDoList(data)
        message.success('Successfully deleted')
    }
    const handleCancel = (flag, type) => {
        if (type === 'edit') {
            setIsEditModalVisible(flag)
        } else {
            setIsModalVisible(flag)
        }
    }
    return (
        <div className="App">
            <Layout>
                <Header style={{ backgroundColor: '#0984e3' }}>
                    <MyHeader showAddList={showAddList} handleListAddButton={(value) => setShowAddList(value)}></MyHeader>
                </Header>
                <Content>
                    {showAddList && <AddList handleListInputAdd={(value) => handleListInputAdd(value)}></AddList>}
                    {toDoList.map((item) => (
                        <ToDoItem key={item.id} value={item.value} completed={item.completed} index={item.id} handleModalShow={openModal} onCheckedChange={onCheckedChange} handleDelete={(index) => handleDelete(index)}></ToDoItem>
                    ))}
                    <ShowDetailModal data={currentData} handleCancel={handleCancel} isModalVisible={isModalVisible} handleDetailModalShow={handleDetailModalShow}></ShowDetailModal>
                    <ShowEditModal data={currentData} handleCancel={handleCancel} isEditModalVisible={isEditModalVisible} handleEditModalShow={handleEditModalShow}></ShowEditModal>
                </Content>
                <Footer>life is A struggle</Footer>
            </Layout>
        </div>
    )
}

export default hot(App)
