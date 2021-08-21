
import HomePageContent from '../HomePageContent/HomePageContent'
import FooterBar from '../FooterBar/FooterBar'
import DetailsHeaderSecond from "../DetailsHeaderSecond/DetailsHeaderSecond";
import "./HomePage.css";

const HomePage = () => {


  return (

    <div className='Content-container'>
      <DetailsHeaderSecond />


      <div className='Home-img'>

        <h2>Upcoming Events</h2>
        <HomePageContent
          imgone={'img2.jpg'} dateone='Aug 9, 7:00PM'
          imgtwo={'img3.jpg'} datetwo='Aug 11, 8:00PM'
          imgthree={'img4.jpg'} datethree='Aug 14, 11:00AM'
          btntxt='View' />
        <h2>Community Groups</h2>
        <HomePageContent
          imgone={'img8.jpg'} dateone='Aug 29, 7:00PM'
          imgtwo={'img9.jpg'} datetwo='Sep 3, 1:00PM'
          imgthree={'img7.jpg'} datethree='Sep 5, 11:00AM'
          btntxt='Join' />
        <h2>Mentors</h2>
        <HomePageContent
          imgone={'img5.jpg'} dateone='Sep 5 7:00PM'
          imgtwo={'img6.jpg'} datetwo='Sep 10, 11:30AM'
          imgthree={'img7.jpg'} datethree='Sep 5, 11:00AM'
          btntxt='Connect' />
      </div>




      <FooterBar />
    </div>



  );
};

export default HomePage;
