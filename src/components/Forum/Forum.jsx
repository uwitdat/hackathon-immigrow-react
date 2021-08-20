import { Component } from 'react';
import Post from "../Post/Post";
import Form from "../Form/Form";
import FooterBar from "../FooterBar/FooterBar";


export default class Forum extends Component {
    state = {
      posts: []
    }
  
    getPosts = async () => {
      await fetch("/api").then((res) => res.json()).then(data => this.setState({posts: data}))
    }
  
    componentDidMount() {
        this.getPosts()
      }
      
      render() {
          return (
            <div className="App">
              {this.state.posts.length ? 
                this.state.posts.map(p => (
                  <Post 
                    post={p}
                    getPosts={this.getPosts}
                  />
                ))
                  :
                <h1>Start a discussion with people of similar interests and backgrounds!</h1>
              }
              <Form
                getPosts={this.getPosts}
              />
              <FooterBar />
            </div>
          );
        }}