export default function Posts({posts, onDelete, onEdit}){
    return (
           <div>
            <h2>All Posts</h2>
            <div>
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <span>{post.id} </span>
                            <span>{post.title}</span>
                            <div>
                                <span onClick={() => onDelete(post.id)} >
                                    ❌
                                </span>
                                <span onClick={() => onEdit(post)} >
                                    ✏️
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}