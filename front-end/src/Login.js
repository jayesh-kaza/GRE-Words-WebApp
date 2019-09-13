import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Basic from './Components/Basic';
import React,{Component} from 'react'
import axios from 'axios'

class Login extends Component {

    constructor(props){
    super(props);
    this.state={
    username:'',
    password:''
        }
    }

    //handler for Login Button
    handleClick(event){
        var apiBaseUrl = "http://localhost:8080/users/";
        var self = this;
        var payload={
        "name":this.state.username,
        "password":this.state.password
        }
        //Make a post request to the back-end
        axios.post(apiBaseUrl+'login', payload)
        .then(function (response) {
            console.log(response);
            if(response.status === 200){
            console.log("Login successfull");
            var userScreen=[];
            //Make changes to the userScreen[] delegated as Context and 
            //update it with userScreen i.e. Basic component
            userScreen.push(<Basic appContext={self.props.appContext} userid={response.data.id}/>)
            self.props.appContext.setState({loginPage:[],userScreen:userScreen,flag:false})
            }
            else if(response.status === 404){
            console.log("Username password do not match");
            alert("username password do not match")
            }
            else{
            console.log("Username does not exists");
            alert("Username does not exist");
            }
        })
        .catch(function (error) {
        console.log(error);
        });
        }


    render() {
        return (
        <div>
            <MuiThemeProvider>
            <div>
            <AppBar
                 title="Login"
            />
            <TextField
                hintText="Enter your Username"
                floatingLabelText="Username"
                onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;