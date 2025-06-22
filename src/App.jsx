import { useState } from "react";
import data from "./db/data";
import Posts from "./components/Posts";
import EditPost from "./components/EditPost";
import AddPost from "./components/AddPost";

function App() {
  const [posts, setPosts] = useState(data);
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");

  const handleAddPost = (post) => {
    const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;
    setPosts([
      ...posts, {
        id: id.toString(),
        ...post
      }
    ])
  };
  const handleEditPost = (id) => {};

  const handleDeletePost = (id) => {};
  return (
    <>
      <div>
        <h1>Api Requests with Axios</h1>
        <hr />
        <div>
          <Posts posts={posts} />
          <hr />
          {post ? <EditPost /> : <AddPost onAdd={handleAddPost} />}
          {error && (
            <>
              <hr />
              <div className="error">{error}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
