import React, { Component } from 'react';
import { routerActions } from 'react-router-redux';
import { connect } from "react-redux";

class Timeline extends Component {
  constructor()
  {
    super();
    this.state = { };
  }

  componentWillReceiveProps(nextProps) {
    console.log("Timeline:componentWillReceiveProps");
    console.log(nextProps);
    this.setState({ Login: nextProps });
  }

  componentWillMount() {
    this.state = { Login: this.props.Login };
    if (!this.state.Login || this.state.Login.token === null) {
      this.props.dispatch(routerActions.push("/login"));
    }
  }

  render() {
    return (
      <div>
          Timeline
      </div>
    );
  }
}

export default connect()(Timeline);
