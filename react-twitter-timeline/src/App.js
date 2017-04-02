import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from "react-redux";
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state = { Login: {} };
  }

  componentWillReceiveProps(nextProps) {
    console.log("App.componentWillReceive");
    console.log(nextProps);
    this.setState({ Login: nextProps.Login });
  }

  render() {
    var self = this;
    var children = React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, {
        Login: self.state.Login
      })
    });

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Twitter</h2>
        </div>
        <div className="App-intro">
            {children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    console.log(state.reducer.Login);
    return {
         Login: state.reducer.Login
    };
};
export default connect(mapStateToProps)(App);
