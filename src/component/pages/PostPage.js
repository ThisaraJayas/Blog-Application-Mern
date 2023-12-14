import { formatISO9075 } from "date-fns"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function PostPage(){
    const [PostInfo, setPostInfo] = useState(null)
    const {id} = useParams()//we used to grab id from url
   
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
            <div className="author">by {PostInfo.author.username}</div>
            <div className="image">
                
                <img src={'http://localhost:4000/'+PostInfo.cover}></img>
            </div>
            
            
            <div dangerouslySetInnerHTML={{__html:PostInfo.content}}/>
        </div>
    )
}