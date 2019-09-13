import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import Register from './Register';

class Loginscreen extends Component {

  //This component contains the register user and Login Page details
  constructor(props){
    super(props);
    //username and password in the state is to register the user
    //loginscreen[] stores the Login Component
    this.state={
      username:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      buttonLabel:'Register',
      isLogin:true
    }
  }

  //At the start, add the Login component in 'loginscreen[]'
  componentDidMount(){
    var loginscreen=[];
    loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
    var loginmessage = "Not registered yet, Register Now";
    this.setState({
      loginscreen:loginscreen,
      loginmessage:loginmessage
      })
  }

  

  //handler for Register Button
  handleClick(event){
    // console.log("event",event);
    var loginmessage;
    if(this.state.isLogin)
    {
      var loginscreen=[];
      //change loginscreen[] to hold Register component then it will re-render.
      loginscreen.push(<Register parentContext={this}/>);
      loginmessage = "Already registered.Go to Login";
      this.setState({
        loginscreen:loginscreen,
        loginmessage:loginmessage,
        buttonLabel:"Login",
        isLogin:false
      })
    }
    else
    {
      //change the message to not registered.
      var loginscreen1=[];
      loginscreen1.push(<Login parentContext={this}/>);
      loginmessage = "Not Registered yet.Go to registration";
      this.setState({
        loginscreen:loginscreen1,
        loginmessage:loginmessage,
        buttonLabel:"Register",
        isLogin:true
      })
    }
  }

  //First display Login component (in loginscreen[])
  //then display Register button
  render() {
    return (
      <div className="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          <MuiThemeProvider>
            <div>
               <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
           </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }

}

const style = {
  margin: 15,
};

export default Loginscreen;