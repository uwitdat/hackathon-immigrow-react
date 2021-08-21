import { useEffect, useState } from "react";
import Mentor from "../Mentor/Mentor";
import axios from "axios";
import FooterBar from "../FooterBar/FooterBar";
import DetailsHeader from "../DetailsHeader/DetailsHeader";
import './MentorsPage.css'

const MentorsPage = () => {
  const [mentors, setMentors] = useState([]);

  console.log(mentors)

  const getMentors = async () => {
    const res = await axios.get("http://localhost:3001/mentors");
    setMentors(res.data);
  };
  useEffect(() => {
    getMentors();
  }, []);

  return (
    <div className='padding-extra'>
      <DetailsHeader />
      {mentors.map((mentor) => (
        <Mentor key={mentor._id} mentor={mentor} />
      ))}

      <FooterBar />
    </div>
  );
};
export default MentorsPage;
