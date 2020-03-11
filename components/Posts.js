import React from "react";

class Posts extends React.Component {
  state = {
    loading: true,
    posts: [],
    deleteID: 0
  };

  async componentDidMount() {
    const url = 'http://localhost:8080/post';
    const res = await fetch(url, { method: 'GET' });
    const data = await res.json();
    this.setState({ posts: data.posts, loading: false, deleteID : 0});
  }

  deleter = id => {
    const url = 'http://localhost:8080/post/' + id;
    const res = fetch(url, { method: 'DELETE' }).then((response) => {
    return response.json()});
    window.location.reload();
  }

  render(){
    if (this.state.loading) {
      return <div>laden...</div>;
    }

    if (!this.state.posts.length){
      return <div>Es wurden keine Posts auf dem Server gefunden.</div>;
    }

    return (
      <div>
        {this.state.posts.map(post => (
          <div key={post.id}>
              <h1>{post.name}</h1>

              <p><strong>Autor:</strong> {post.author}<br/>

              <strong>Datum: </strong>{post.date}</p>

              <div>{post.content}</div>

              <br/>

              <button onClick={ () => { this.deleter(post.id) }}>
              Post löschen
              </button>
              <br/>
              <br/>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
