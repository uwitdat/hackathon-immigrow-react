import React, { Component } from 'react';
import { HiPaperAirplane } from 'react-icons/hi';
import AuthPage from "../AuthPage/AuthPage";
import { Route, Switch, Redirect } from 'react-router-dom';
import UserDetailsPage from "../UserDetailsPage/UserDetailsPage";
import HomePage from "../HomePage/HomePage";
import MentorsPage from "../MentorsPage/MentorsPage";
import CommunityEvents from "../CommunityEvents/CommunityEvents";
import Forum from "../Forum/Forum";

class LandingPage extends Component {
  state = {
    user: null,
  }

  // if the user clicks signup/login (and is legit), put the user in state.
  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }

  // when the page refreshes, check localStorage for the user jwt token
  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      // YOU DO: check expiry!
      let userDoc = JSON.parse(atob(token.split('.')[1])).user // decode jwt token
      this.setState({user: userDoc})      
    }
  }

  render() {
    return (
      <main className="Signup-container">
      { this.state.user ? 
      <Switch>
            <Route path='/details' render={(props) => (
              <UserDetailsPage {...props}/>
            )}/>
            <Route path='/homepage' render={(props) => (
              <HomePage {...props}/>
            )}/>
            <Route path='/mentors' render={(props) => (
              <MentorsPage {...props}/>
            )}/>
            <Route path='/meetups' render={(props) => (
              <CommunityEvents {...props}/>
            )}/>
            <Route path='/forum' render={(props) => (
              <Forum {...props}/>
            )}/>
            <Redirect to="/homepage" />
          </Switch>
          :
          <AuthPage setUserInState={this.setUserInState}/>
        }
      </main>
    );
  }
}

export default LandingPage;
