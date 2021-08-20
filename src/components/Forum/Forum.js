import { Component } from 'react';
import Post from "../Post/Post";
import Form from "../Form/Form";
import FooterBar from '../FooterBar/FooterBar'
import DetailsHeader from '../DetailsHeader/DetailsHeader'
import './Forum.css'


export default class Forum extends Component {
    state = {
        posts: []
    }

    getPosts = async () => {
        await fetch("/api").then((res) => res.json()).then(data => this.setState({ posts: data }))
    }

    componentDidMount() {
        this.getPosts()
    }

    render() {
        return (
            <>
                <DetailsHeader />
                <div className="Forum-container">

                    {this.state.posts.length ?
                        this.state.posts.map(p => (
                            <Post
                                post={p}
                                getPosts={this.getPosts}
                            />
                        ))
                        :
                        null
                    }
                    <Form
                        getPosts={this.getPosts}
                    />
                    <FooterBar />
                </div>
            </>
        );
    }
}