import { useEffect, useState } from "react";
import Post from "../Post";

export default function IndexPage(){
    const [posts, setPosts] = useState([]) //this step after modifying index.js
    useEffect(()=>{
        fetch('http://localhost:4000/post').then(response=>{
            response.json().then(posts=>{
                setPosts(posts)           //now go to index.js
            })
        })
    },[])
    return(
        <>
           {posts.length > 0 && posts.map(post=>(
            <Post {...post}/>
           ))}
        </>
    );
}


// const [posts, setPosts] = useState([]) //this step after modifying index.js
// useEffect(()=>{
//     fetch('http://localhost:4000/post').then(response=>{
//         response.json().then(posts=>{
//             setPosts(posts)           //now go to index.js
//         })
//     })
// },[])