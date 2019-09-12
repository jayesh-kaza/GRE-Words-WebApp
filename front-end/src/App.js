import React, { Component } from 'react';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// // Needed for onTouchTap
// // http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();
import './App.css';
import Loginscreen from './Loginscreen'


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }
  componentDidMount(){
    var loginPage =[];
    loginPage.push(<Loginscreen parentContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div>
        <div className="App">
          {this.state.loginPage}
        </div>
        {this.state.uploadScreen}
      </div>
    );
  }
}

export default App;