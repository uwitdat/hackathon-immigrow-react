import { ImRadioUnchecked, ImRadioChecked } from "react-icons/im";
import { useState } from "react";
import "./MentorEvent.css";

const MentorEvent = ({ mentorevent }) => {
  const [attending, setAttending] = useState(false);

  const handleAttend = () => {
    setAttending(!attending);
  };
  return (
    <div className="event-container">
      <h4>{mentorevent.mentoreventName}</h4>
      <p className="event-date">{mentorevent.dateTime}</p>

      {attending ? (
        <div className="attend-container">
          <p className="attend-txt">
            Attending: <span className="check">{mentorevent.name}</span>{" "}
            <span>&#10004;</span>
          </p>
          <p>
            Event link: <span className="event-link">{mentorevent.link}</span>
          </p>
          <ImRadioChecked className="btn-attend" onClick={handleAttend} />
        </div>
      ) : (
        <div className="attend-container">
          <p className="unattend-txt"> Click to attend: </p>
          <ImRadioUnchecked className="btn-unattend" onClick={handleAttend} />
        </div>
      )}
    </div>
  );
};

export default MentorEvent;
