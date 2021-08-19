import { UserContext } from "../UserContext/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="Home-container">
      <h1>
        Welcome {user.name}
        <span className="Home-span">
          Let's get you started. What are you interested in?
        </span>
      </h1>

      <div className="Home-blocks-container">
        <Link to="/mentors">
          <div className="Home-block">View Upcoming Seminars</div>
        </Link>
        <div className="Home-block">Attending community meetups</div>
        <div className="Home-block">Joining a Community Group</div>
      </div>
      <Link to="/profile/:id">
        <button className="btn-prof">View Profile</button>
      </Link>
    </div>
  );
};

export default HomePage;
