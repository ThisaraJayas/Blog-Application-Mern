import {format} from 'date-fns'
//                      grab all data from here
export default function Post({title,summary,cover,content,createdAt}){
    return(
        <div className="post">
        <div className="image">
        <img src="https://images.unsplash.com/photo-1545048702-79362596cdc9?fit=max&fm=jpg&ixid=M3wzNTY3MHwwfDF8YWxsfHx8fHx8fHx8MTcwMTk3ODkyN3w&ixlib=rb-4.0.3&q=75&w=720&utm_medium=referral&utm_source=vocal.media"></img>
        </div>
        <div className="texts">
        <h2>{title}</h2>
        <p className="info">
          <a className="author">Thisara Jay</a>
          {/* to print date in time format = client-> npm install date-fns */}
          <time>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
        </p>
        <p className="summary">{summary}</p>
        </div>
      </div>
      
    );
}