import Post from "./Post"
import axios from "axios";
import { useState, useEffect } from "react";

const PostList = () => {
    const apiEndPoint = "http://localhost:5000/posts";
    const [state, setState] = useState([]);

    useEffect(() => {
        axios.get(apiEndPoint).then(res => {
            setState({posts: res.data.data.posts});
        })
        
    },[])
    console.log(state)
    // const posts = ['bir', 'iki', 'üç', 'dört'];

    return (
        <div className="container mx-auto bg-red-200 " >
            <div className="flex flex-wrap" >
                {state.posts.length > 0 && state.posts.map((post) => 
                    <Post {...post} key={post?._id} />
                )}
            </div>
        </div>
    )
}

export default PostList;
