import React, { Component } from 'react'

class LifeCycleDemo extends Component {
  // life cycle hooks are available in class components 
  
  constructor(props){
    super(props);
    console.log('[LifeCycleDemo.js] - 1. Inside Constructor');
    this.state = {}
  }

  static getDerivedStateFromProps( props, state) {
    // can't have 'this' keyword
    // and you can't access any other methods
    // the only way to update state is by returning an object
    console.log('[LifeCycleDemo.js] - 2. Inside getDerivedStateFromProps');
    console.log(props);
    return state;
  }

  componentDidMount(){
    // called when comp comes into the view
    // ideal place for all you ajax calls
    console.log('[LifeCycleDemo.js] - 4. Inside componentDidMount');
  }

  componentWillUnmount(){
    // called when comp goes out of the view
    // ideal place -- clear intervals, timeouts, remove unneccessary data
    console.log('[LifeCycleDemo.js] - 5. Inside componentWillUnmount');
  }

  render() {
    console.log('[LifeCycleDemo.js] - 3. Inside render');
    
    return (
      <div>
        <h2>Life Cycle Hook | Demo</h2>
        <div className='alert aler-info'>Open Console to see the logs</div>
        <p>All Lifecycle hooks here</p>
        <p>Refer: https://reactjs.org/docs/state-and-lifecycle.html</p>
      </div>
    )
  }
}

export default LifeCycleDemo;