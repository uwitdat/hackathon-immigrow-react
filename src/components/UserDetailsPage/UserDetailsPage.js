import "./UserDetails.css";

import { useContext, useState } from "react";
import { UserContext } from "../UserContext/UserContext";
import { useHistory } from "react-router-dom";
import DetailsHeader from "../DetailsHeader/DetailsHeader";
import { FaUserCircle } from "react-icons/fa";

const UserDetailsPage = () => {
  const { user, setUser } = useContext(UserContext);

  const [bio, setBio] = useState("");
  const [char, setChar] = useState(0)
  const history = useHistory();

  const handleAddDetails = (e) => {
    e.preventDefault();
    setUser({
      ...user,

      bio: bio
    });
    history.push("/homepage");
  };

  const handleSetBio = (e) => {
    setBio(e.target.value)
    setChar(char + 1)
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 46) {
      console.log('true');
    } else {
      console.log('false')
    }
  }


  return (
    <div className="UserDetails-container">
      <DetailsHeader />

      <div className='img-upload'>
        <div className='img-contain'>
          <FaUserCircle className='UserDetails-avatar' />
        </div>
      </div>
      <div className='text-info-User'>
        <p className='Details-txt'>Hi,</p>
        <p className='Details-txt margin-btn'>{user.name}!</p>
        <p className='margin-btn'>Welcome to Immigrow! Please fill out a short bio so we can better connect you with others in your community!</p>
        <p className='Details-txt margin-btn'>Bio</p>
      </div>
      <div className="UserDetails-form-container">

        <form onSubmit={handleAddDetails}>

          <textarea
            className="DetailsPage-txt-area"
            placeholder="Write a short bio about yourself..."
            value={bio}
            onChange={handleSetBio}
            onKeyDown={(e) => handleKeyDown(e)}
          ></textarea>
          <div className='char-remain'>
            <p>{char}/200 characters</p>

          </div>
          <button type="submit" className="Login-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserDetailsPage;
