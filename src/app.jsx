// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MoverTMMaster from './MoverTMMaster'
import axios from 'axios'
import Functions from './Functions'

injectTapEventPlugin();

class App extends React.Component  {
  constructor(props){
    super(props);
    this.state = {auth_status: {
      signed_in:false,
      current_user:undefined,
    }};
    this.loadCurrentUser();
  }
  loadCurrentUser(){
    axios.get('/api/v1/users/auth_status')
    .then(res => {
      this.setState({
        auth_status: res.data,
      });
      console.log("loadCurrentUser");
    })
    .catch(error => {
      throw error
    })
  };
  logout(){
    var data ={
          authenticity_token: Functions.getMetaContent("csrf-token")
        };
    axios({
      method: 'delete',
      url: `/users/sign_out.json`,
      data: data,
    })
    .then(res => {
        location.reload();
      })
      .catch(error => {
        throw error
      })
  }

  render(){
    return(
      <MuiThemeProvider>
        <MoverTMMaster　
        loadCurrentUser={this.loadCurrentUser.bind(this)}
        auth_status={this.state.auth_status}
        logout={this.logout.bind(this)}
        />
      </MuiThemeProvider>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App  />,
    document.body.appendChild(document.createElement('div')),
  )
})
