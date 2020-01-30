import React from 'react';
import ReactDOM from 'react-dom';
//all in js
import TodoList from './newTodoList';


//pwa 用电脑写手机app 无网络也能看到之前的效果 
//jsx  <app/>用到啦jsx
// 主要的渲染方法 其他的都是返回reactdom 元素
//App 是自己定义的组件标签 必须大写 区分原始
ReactDOM.render(<TodoList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

