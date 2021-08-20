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
    this.setState({ user: incomingUserData })
  }

  // when the page refreshes, check localStorage for the user jwt token
  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      // YOU DO: check expiry!
      let userDoc = JSON.parse(atob(token.split('.')[1])).user // decode jwt token
      this.setState({ user: userDoc })
    }
  }

  render() {
    return (
      <main className="Signup-container">
        {this.state.user ?
          <Switch>
            <Route path='/details' render={(props) => (
              <UserDetailsPage {...props} />
            )} />
            <Route path='/homepage' render={(props) => (
              <HomePage {...props} />
            )} />
            <Route path='/mentors' render={(props) => (
              <MentorsPage {...props} />
            )} />
            <Route path='/meetups' render={(props) => (
              <CommunityEvents {...props} />
            )} />
            <Route path='/forum' render={(props) => (
              <Forum {...props} />
            )} />
            <Redirect to="/homepage" />
          </Switch>
          :
          <AuthPage setUserInState={this.setUserInState} />
        }
      </main>
    );
  }
}

export default LandingPage;

// import "./LandingPage.css";
// import { useContext, useState } from "react";
// import { UserContext } from "../UserContext/UserContext";
// import { useHistory } from "react-router-dom";

// const LandingPage = () => {
//   const { user, setUser } = useContext(UserContext);

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const history = useHistory();

//   const handleSubmitUser = (e) => {
//     e.preventDefault();
//     setUser({
//       ...user,
//       name: name,
//       email: email,
//       password: password
//     });
//     history.push("/details");
//   };

//   return (
//     <div className="LandingPage-container">

//       <div className="Login-container">

//         <div className='logo-title'>

//           <div className="Login-logo">
//             <img style={{ height: '6rem' }} alt='logo' src='imigrow.png'></img>
//           </div>
//           <div className='LandingPage-title-container'>
//             <h1 className='LandingPage-h1'>IMMIGROW</h1>
//           </div>
//         </div>

//         <div className='form-container'>
//           <form onSubmit={handleSubmitUser}>
//             <input
//               className="Login-input"
//               type="text"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required={true}
//             />
//             <input
//               className="Login-input"
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required={true}
//             />
//             <input
//               className="Login-input"
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required={true}
//             />
//             <input
//               className="Login-input"
//               type="password"
//               placeholder="Re-Enter Password"

//               required={true}
//             />
//             <div className='terms-agree'>
//               <input type='checkbox' id="box" />
//               <p>I agree to the <span id='link'>terms of service</span> & <span id='link'>security policy</span></p>
//             </div>

//             <button type="submit" className="Login-btn">
//               Sign Up
//             </button>
//           </form>
//         </div>
//         <div className='policy'>
//           <p>Terms of service | Privacy policy | Security</p>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;