export default function Posts({posts}){
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
                                <span >
                                    ❌
                                </span>
                                <span >
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