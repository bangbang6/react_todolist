import React from 'react';
import {Fragment}  from 'react';

//import axios from 'axios'
import TodoItem from "./TodoItem"
//import App from './App'
 //如果是类的话自动调用render()函数 返回一个标签
class TodoList extends React.Component {
    //也是jsx语法

    //变量些里面
   constructor(props){
       super(props) // 调用父类的够着函数
       this.state = {
           inputValue:"",
           List:[]
       }
   } 

  render(){
      console.log('render')
    //jsx使用js语法或者变量必须大括号      如果变量不加{}就是常量
    /*1.当state 或者 props被改变 render被重新执行 返回新的jsx  生命函数
     2.当父组件的render 执行时，子逐渐的render会被执行 可能子主键压根不需要render
    3.render()效率很高 因为用虚拟dom
    */
    /// 为什么不用index做key值 因为diff算法是更加key值对比的 a 0 b 1 删除a b0 本来b应该是1对比  不变的
    //虚拟dom就是数组 一个数组一个标签 ['div',{id:'abv'},[span],{},'hello'] ==> <div id='abv'><span>hello    </span></div> == React.createElement('div',{},React.createElement('span',{},'hello'))
    return( 
        <Fragment>
           {/*  把方法传过去deleteItem. 子组件调用父组件方法 */}
            <input className = "inputs" value={this.state.inputValue} onChange={this.handle.bind(this)} ref = {(ele)=>{this.ele = ele}}/> <button onClick={this.handleClick.bind(this)}>提交</button>
            <ul>
                {this.getTodoItem()}
            </ul>
           
        </Fragment>
    )   
  }

  //life circle
  //第一次挂载执行
  componentWillMount(){
      console.log('will mount');
  }
  componentDidMount(){
      console.log('did mount')
      //做ajax请求axios.get('').then(()=>{},()=>{})  
  }
  //组件更新 当states或者props发送变化时执行

  shouldComponentUpdate(){
      console.log('update?')
      return true
  }
  componentWillUpdate(){
      console.log('will update')
  }
 componentDidUpdate(){
     console.log('did update')
 }

  getTodoItem(){
    return this.state.List.map((item,index)=>{
        return (<TodoItem content={item} index = {index} deleteItem = {this.delete.bind(this)} key={index} />)
      } 
    )
  }






  //方法写外面
  handle(e){
    //onsole.log(e.target.value)
    //不能直接改变state 必须setstate
    //console.log(this.ele.value)
    var value = e.target.value
   this.setState(()=>({
        inputValue:value
   }),()=>{
    console.log('state改变'); //回调函数
   })// ---------------------------！！！！！！！！！！！！！！！！底层是异步函数 所以记住有时候顺序有问题！！！！！！！！！！！！！！！！！！！！！！！---
  }


  handleClick(){
      this.setState({
          List:[...this.state.List,this.state.inputValue],
          inputValue:""
      })
  }
  delete(index){
    //避免直接改原来的 inmmutable 不做任何改变
    var List =[...this.state.List];
    List.splice(index,1);
    this.setState({
        List,
        
    })
  }
}

export default TodoList;
