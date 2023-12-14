import { useEffect, useState } from "react"
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Navigate, useParams } from "react-router-dom"

const models={
    toolbar:[
        [{ 'header': [1, 2, false] }], // Header option
        ['bold', 'italic', 'underline', 'strike', 'blockquote'], // Text formatting options
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }], // List options
        ['link', 'image'], // Link and image options
        ['clean'] // Clean option
    ]
}
const formats=[
    'header',
    'bold','italic','underline','strike','blockquote',
    'list','bullet','indent',
    'link','image'
]

export default function EditPost(){
    const{id} = useParams() //grab id from URL
    const [title, setTitle] = useState('')
    const [summary,setSummary] = useState('')
    const [content,setContent] = useState('')
    const [files, setFiles] = useState('')
    const [redirect, setRedirect] = useState(false)

    useEffect(()=>{
        fetch('http://localhost:4000/post/'+id)
        .then(response=>{
            response.json().then(postInfo=>{
                setTitle(postInfo.title)
                setContent(postInfo.content)
                setSummary(postInfo.summary)
            })
        })
    },[])

    async function updatePost(ev){
        ev.preventDefault()
        const data = new FormData()
        data.set('title',title)
        data.set('summary',summary)
        data.set('content',content)
        data.set('id',id)
        if(files?.[0]){
            data.set('file',files?.[0])
        }
        
        const response = await fetch('http://localhost:4000/post',{
            method: 'PUT', //put for update
            body: data,
            credentials: 'include'
        })
        if(response.ok){
            setRedirect(true)
        }
        }
        

    if(redirect){
        return <Navigate to={'/post/'+id}/>
        //change in our indexPage.js to get real values
     }

    return(
        <form onSubmit={updatePost}>
        <input type="title" placeholder={'Title'} 
        value={title}
        onChange={ev=>setTitle(ev.target.value)
        }/>
        <input type="summary" placeholder={'Summary'}
         value={summary}
        onChange={ev=>setSummary(ev.target.value)}
        />
        <input type="file" 
        onChange={ev=>setFiles(ev.target.files)}/>
        {/* //to get textedditor like input install react-quill */}
        <ReactQuill value={content} 
        modules={models} 
        formats={formats}
        onChange={newValue=>setContent(newValue)}
        />
        <button style={{marginTop: '5px'}}>Update Post</button>
        
    </form>
    )
}