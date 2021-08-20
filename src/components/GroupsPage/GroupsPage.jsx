import { Component } from 'react';
import { Link } from "react-router-dom";
import Post from "../Post/Post";
import Form from "../Form/Form";
import FooterBar from "../FooterBar/FooterBar"


export default class Forum extends Component {
      render() {
          return (
            <div className="App">
                <Link to='/forum'>
                    <button>Community Group: French Speakers</button>
                </Link>
                <Link to='/forum'>
                    <button>Community Group: Newcomers From Bahrain</button>
                </Link>
                <Link to='/forum'>
                    <button>Community Group: Seeking Employment Opportunities</button>
                </Link>
                <Link to='/forum'>
                    <button>Community Group: Urdu Speakers</button>
                </Link>
                <Link to='/forum'>
                    <button>Community Group: Language Learning</button>
                </Link>
                <FooterBar />
            </div>
          );
        }}