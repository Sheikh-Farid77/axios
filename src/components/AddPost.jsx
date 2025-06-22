import { useState } from "react";

export default function AddPost({onAdd}) {
    const [post, setPost] = useState({
        title: '',
        body: ''
    })
    
    const handleChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value, 
        })
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();
        onAdd(post);
        setPost({
            title: '',
            body: ''
        })

    }
  return (
    <div>
      <h2>Add new post</h2>

      <form onSubmit={handleSubmit}>
        <p>
          <input onChange={handleChange} name="title" value={post.title} type="text" placeholder="Post title" />
        </p>

        <p>
          <input type="text" onChange={handleChange} name="body" value={post.body} placeholder="Post body" />
        </p>

        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
