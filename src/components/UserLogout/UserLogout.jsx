import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";

class UserLogOut extends React.Component {

  handleLogout = () => {
    this.setState({ user: null });
    localStorage.clear();
    window.location.href = '/';
  }

  render() {
    return (
      <div className='UserLogOut'>
        <IoIosLogOut className='footer-icon black' />
        <p onClick={this.handleLogout} className='footer-text black'>LOGOUT</p>
      </div>
    );
  }
}

export default UserLogOut;