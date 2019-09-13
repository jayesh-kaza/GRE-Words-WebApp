import React, { Component } from 'react';
import './App.css';
import Loginscreen from './Loginscreen'


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      //to store login-page components
      loginPage:[],
      //to store user-screen components
      userScreen:[],
      flag:true
    }
  }

  //When the component first mounts add the LoginScreen Component
  componentDidMount(){
    var loginPage =[];
    loginPage.push(<Loginscreen parentContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }

  render() {

    //flag is to display either the loginPage first or the userScreen first
    const x = this.state.flag?this.state.loginPage:this.state.userScreen
    return (
      <div>
        <div className="App">
          {x}
        </div>
      </div>
    );
  }
}

export default App;