import React, { Component } from 'react';
import { routerActions } from 'react-router-redux';
import { connect } from "react-redux";
import * as actions from "./actions";

class Login extends Component {
    constructor()
    {
        super();
        this.state = { ...this.state, Login: this.props === null ? {} : this.props };
    }

    componentWillReceiveProps(nextProps)
    {
        console.log("Login.componentWillReceiveProps");
        console.log(nextProps);
        if (nextProps.Login !== null) {
            if (nextProps.Login.processing === false && nextProps.Login.failed) {
                this.setState(nextProps.Login);
            }
            else if (nextProps.Login.processing === false && nextProps.Login.token) {
                this.props.dispatch(routerActions.push({ path: "/timeline", state: nextProps.Login }));
            }
        }
    }

    componentWillMount() {
        this.setState({ ...this.state, Login: this.props === null ? {} : this.props.Login });
        if (this.state.Login && this.state.Login.token !== null) {
            this.props.dispatch(routerActions.push("/timeline"));
        }
        else
        {   
            this.setState({ ...this.state, Login: {} });
        }
    }

    keyChanged(e)
    {
        this.state.Login = { ...this.state.Login, key: e.target.value };
    }

    secretChanged(e)
    {
        this.state.Login = { ...this.state.Login, secret: e.target.value };
    }

    performLogin()
    {
        this.props.dispatch(actions.Login(this.state.Login));
    }

  render() {
    return (
      <div>
          <p>
              { this.state.processing === false && this.state.failed && this.state.failed.response.status === 403 ?
              "Invalid username or password" : "" }
          </p>
          <p>
            <label>Key:
                <input type="text" onChange={ this.keyChanged.bind(this) } />
            </label>
          </p>
          <p>
            <label>Secret:
                <input type="text" onChange={ this.secretChanged.bind(this) } />
            </label>
          </p>
          <p>
              <button onClick={ this.performLogin.bind(this) }>Login To Twitter</button>
          </p>
      </div>
    );
  }
}

export default connect()(Login);
