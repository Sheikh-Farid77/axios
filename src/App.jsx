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
      ...posts,
      {
        id: id.toString(),
        ...post,
      },
    ]);
  };
  const handleEditPost = (updatedPost) => {
    setPosts(
      posts.map((post) => {
        if (post.id === updatedPost.id) {
          return updatedPost;
        }
        return post;
      })
    );
    setPost(null);
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };
  return (
    <>
      <div>
        <h1>Api Requests with Axios</h1>
        <hr />
        <div>
          <Posts posts={posts} onDelete={handleDeletePost} onEdit={setPost} />
          <hr />
          {post ? (
            <EditPost post={post} onEdit={handleEditPost} />
          ) : (
            <AddPost onAdd={handleAddPost} />
          )}
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
