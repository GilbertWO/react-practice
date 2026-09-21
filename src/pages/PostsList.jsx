import { useState, useEffect } from 'react';
import './PostsList.css';

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=12')
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
      .then(setPosts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Something went wrong: {error}</p>;

  return (
    <div className="cards">
      {posts.map((post) =>(
        <article key={post.id} className="card">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
}

export default PostsList;