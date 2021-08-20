import React from 'react'
import './AuthPage.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';


export default class AuthPage extends React.Component {
  state = {
    showLogin: true,
  }

  render() {
    return (
      <div className='LandingPage-container'>
          <div className='immigrow-logo'>
          <img style={{ height: '8rem' }} alt='logo' src='imigrow.png'></img>
                    <h1 className="text" onClick={() => this.setState(
                        { showLogin: !this.state.showLogin }
                    )}>
                        {this.state.showLogin
                            ?
                            <>Don't have an account? <button>Register</button></>
                            :
                            <>Have an account? <button>Sign In</button></>
                        }</h1>
                </div>

                <div>
                    {this.state.showLogin
                        ?
                        <LoginForm setUserInState={this.props.setUserInState} />
                        :
                        <SignUpForm setUserInState={this.props.setUserInState} />
                    }
                </div>
      </div>
    );
  }
}
