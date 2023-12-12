import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
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
export default function CreatePost(){
    const [title, setTitle] = useState('')
    const [summary,setSummary] = useState('')
    const [content,setContent] = useState('')
    const [files, setFiles] = useState('')
   async function createNewPost(ev){
        //because we have images and stuff we are not sending as json body insted we send as form
        const data = new FormData()
        data.set('title',title)
        data.set('summary',summary)
        data.set('content',content)
        data.set('file',files[0])
        ev.preventDefault()
       const response = await fetch('http://localhost:4000/post',{
            method: 'POST',
            body: data,
        })
        console.log(await response.json())
    }
    return(
        <form onSubmit={createNewPost}>
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
            <button style={{marginTop: '5px'}}>Create Post</button>
            
        </form>
    )
}