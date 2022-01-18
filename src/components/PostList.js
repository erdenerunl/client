import Post from "./Post"
import { useSelector } from "react-redux";

const PostList = () => {
    
    const posts = useSelector(state => state.posts.posts);
    // const posts = ['bir', 'iki', 'üç', 'dört'];

    return (
        <div className="container mx-auto bg-red-200 " >
            <div className="flex flex-wrap" >
                {posts.map((post) => 
                    <Post {...post} key={post?._id} />
                )}
            </div>
        </div>
    )
}

export default PostList;
