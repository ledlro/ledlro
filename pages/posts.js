export default function Posts() {
  const posts = [
    {id:1, title:"Post One", date:"01 Feb 2026"},
    {id:2, title:"Post Two", date:"05 Feb 2026"},
  ];

  return (
    <div style={{padding:'2rem', fontFamily:'Arial, sans-serif'}}>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.title} - <small>{post.date}</small>
          </li>
        ))}
      </ul>
    </div>
  )
}

