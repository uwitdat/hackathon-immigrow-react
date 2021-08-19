import "./LandingPage.css";
import { useContext, useState } from "react";
import { UserContext } from "../UserContext/UserContext";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const { user, setUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmitUser = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      name: name,
      email: email,
      password: password
    });
    history.push("/details");
  };

  return (
    <div className="LandingPage-container">

      <div className="Login-container">

        <div className='logo-title'>

          <div className="Login-logo">
            <p>Logo</p>
          </div>
          <div className='LandingPage-title-container'>
            <h1 className='LandingPage-h1'>IMMIGROW</h1>
          </div>
        </div>

        <div className='form-container'>
          <form onSubmit={handleSubmitUser}>
            <input
              className="Login-input"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={true}
            />
            <input
              className="Login-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
            <input
              className="Login-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />
            <input
              className="Login-input"
              type="password"
              placeholder="Re-Enter Password"

              required={true}
            />
            <div className='terms-agree'>
              <input type='checkbox' id="box" />
              <p>I agree to the terms of service & security policy</p>
            </div>

            <button type="submit" className="Login-btn">
              Sign Up
            </button>
          </form>
        </div>
        <div className='policy'>
          <p>Terms of service | Privacy policy | Security</p>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;
