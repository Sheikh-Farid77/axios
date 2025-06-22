import { useEffect, useState } from "react";
// import data from "./db/data";
import Posts from "./components/Posts";
import EditPost from "./components/EditPost";
import AddPost from "./components/AddPost";
import api from "./api/api";

function App() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");

  const handleAddPost = async (post) => {
    const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;

    const newPost = {
      id: id.toString(),
      ...post,
    };

    const response = await api.post("/posts", newPost);

    setPosts([...posts, response.data]);
  };
  const handleEditPost = async (updatedPost) => {
   try{
    await api.patch(`/posts/${updatedPost.id}`, updatedPost)

     setPosts(
      posts.map((post) => {
        if (post.id === updatedPost.id) {
          return updatedPost;
        }
        return post;
      })
    );
    setPost(null);
   }catch(error){
    setError(error.message)
   }
  };

  const handleDeletePost = async (id) => {
    try {
      if (confirm("Are you sure want to delete this post?")) {
        await api.delete(`/posts/${id}`);
        setPosts(posts.filter((post) => post.id !== id));
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      try {
        const response = await api.get("/posts");
        if (response && !ignore) {
          setPosts(response.data);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();

    return () => (ignore = true);
  }, []);
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
