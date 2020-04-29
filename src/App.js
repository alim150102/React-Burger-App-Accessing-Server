import React, { Component } from 'react'
import Layout from './component/Layout/Layout'
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder'

class App extends Component {

  //REMOVING INTERCEPTOR
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     show : true
  //   }
  // }

  // componentDidMount(){
  //   setTimeout(()=>{
  //     this.setState({show : false})
  //   }, 5000)
  // }

  render() {
    return (
      <div>
        <Layout>
        {/* {this.state.show ? <BurgerBuilder/> : null} */}
        <BurgerBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
