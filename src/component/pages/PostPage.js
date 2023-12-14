import { formatISO9075 } from "date-fns"
import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { UserContext } from "../UserContext"

export default function PostPage(){
    const [PostInfo, setPostInfo] = useState(null)
    const {id} = useParams()//we used to grab id from url
    const {userInfo} = useContext(UserContext) //grab user info for edit button
   
    useEffect(()=>{
        
        fetch(`http://localhost:4000/post/${id}`)
        .then(response=>{
            response.json().then(PostInfo=>{
                setPostInfo(PostInfo)
            })
        })
    },[id])
    if (!PostInfo) return 'Loading...';

    return(
        <div className="postPage">
            <h1>{PostInfo.title}</h1>
            <time>{formatISO9075(new Date(PostInfo.createdAt))}</time>
            <div className="author">by @{PostInfo.author.username}</div>
            {userInfo.id === PostInfo.author._id &&(
                <div className="edit">
                    <Link className="edit-btn" to={`/edit/${PostInfo._id}`}>Edit Post</Link>
                </div>
            )}
            <div className="image">
                
                <img src={'http://localhost:4000/'+PostInfo.cover}></img>
            </div>
            
            
            <div className="content" dangerouslySetInnerHTML={{__html:PostInfo.content}}/>
        </div>
    )
}