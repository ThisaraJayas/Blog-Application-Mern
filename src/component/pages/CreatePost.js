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
    
    return(
        <form>
            <input type="title" placeholder={'Title'}/>
            <input type="summary" placeholder={'Summary'}/>
            <input type="file"/>
            {/* //to get textedditor like input install react-quill */}
            <ReactQuill value={content} modules={models} formats={formats}/>
            <button style={{marginTop: '5px'}}>Create Post</button>
            
        </form>
    )
}