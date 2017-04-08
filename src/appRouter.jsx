// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MoverTMMaster from './MoverTMMaster'
import injectTapEventPlugin from 'react-tap-event-plugin';
import axios from 'axios'


class AppRouter extends React.Component  {
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
    })
    .catch(error => {
      throw error
    })
  };

  render(){
    return(
      <MoverTMMaster　
      loadCurrentUser={this.loadCurrentUser.bind(this)}
      auth_status={this.state.auth_status}
      />
    )
  }
}


export default AppRouter;
