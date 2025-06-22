import { useState } from "react";

export default function EditPost({post, onEdit}) {
    const [updatedPost, setUpdatedPost] = useState(post)

    const handleChange = (e) => {
        setUpdatedPost({
            ...updatedPost,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        onEdit(updatedPost)


    }
  return (
    <div>
      <h2>Edit post</h2>

      <form onSubmit={handleSubmit}>
        <p>
          <input type="text" onChange={handleChange} value={updatedPost.title} name="title" placeholder="Post title" />
        </p>

        <p>
          <input type="text" onChange={handleChange} value={updatedPost.body} name="body" placeholder="Post body" />
        </p>

        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
