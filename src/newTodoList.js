import React,{ Component } from 'react'
import 'antd/dist/antd.css';
import {Input , Button} from 'antd'


class newTodoList extends Component{
    render(){
        return (
            <div>
                <Input placeholder = "todo" style = {{width:'300px'}} />
                <Button type="primary" style = {{marginLeft:'10px'}}>提交</Button>
            </div>
        )
 } 
 } 
export default newTodoList