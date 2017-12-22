import React, { PureComponent } from 'react';
import logo from '../logo.svg';
import './App.css';
import Menu from './hoc/Menu';
import { Button } from 'antd';

import TodoList from './mobx/TodoList';
import store from './mobx/TodoStore';

import ErrorBundary from './react16/ErrorBundary';
import ErrorHandlerHoc from './react16/ErrorHandlerHoc';
import MultipleElementsWithoutWrapper from './react16/MultipleElementsWithoutWrapper';
import TextOnlyComponent from './react16/TextOnlyComponent';
import Portal from './react16/Portal';
import Overlay from './react16/Overlay';
import DOMAttribute from './react16/DOMAttribute';
import SetStateNullAvoidReRender from './react16/SetStateNullAvoidReRender';

import Router from './react-router-v4/Router01';
import RouterDynamic from './react-router-v4/Router-dynamic';
import RouterAuth from './react-router-v4/Router-auth';

class App extends PureComponent {
  handleClick = async () => {
    // moduleA 以及它的所有依赖将会被当成一个独立的chunk加载
    // import('../code-splitting/moduleA')
    //   .then(({ moduleA }) => {
    //     console.log(moduleA);
    //   })
    //   .catch(err => {
    //     console.log(err.message);
    //   });
    
    // async/await 写法
    try {
      const { moduleA } = await import('../code-splitting/moduleA');
      console.log(moduleA);
    } catch (error) {
      console.log(error.message); 
    }
  }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TodoList store={store} />
        <Button type="primary">Antd Button</Button>
        <button onClick={this.handleClick}>Click me</button>
        <Menu /> */}

        {/* <ErrorBundary /> */}
        {/* <ErrorHandlerHoc /> */}
        {/* <MultipleElementsWithoutWrapper /> */}
        {/* <TextOnlyComponent /> */}
        {/* <Portal /> */}
        {/* <Overlay /> */}
        {/* <DOMAttribute /> */}
        {/* <SetStateNullAvoidReRender /> */}

        {/* <Router /> */}
        {/* <RouterDynamic /> */}
        <RouterAuth />
      </div>
    );
  }
}

export default App;
