export default function Post(props) {
    return(
        <div className="post">
            <p className="title">{props.post.name}</p>
            <p className="content">{props.post.content}</p>
        </div>
    )
}