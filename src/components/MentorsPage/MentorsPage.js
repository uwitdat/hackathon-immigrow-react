import { useEffect, useState } from "react";
import Mentor from "../Mentor/Mentor";
import axios from "axios";
import FooterBar from "../FooterBar/FooterBar";
import DetailsHeader from "../DetailsHeader/DetailsHeader";

const MentorsPage = () => {
  const [mentors, setMentors] = useState([]);

  const getMentors = async () => {
    const res = await axios.get("http://localhost:3001/mentors");
    setMentors(res.data);
  };
  useEffect(() => {
    getMentors();
  }, []);

  return (
    <div>
      <DetailsHeader />
      {mentors.map((mentor) => (
        <Mentor key={mentor._id} mentor={mentor} />
      ))}

      <FooterBar />
    </div>
  );
};
export default MentorsPage;
