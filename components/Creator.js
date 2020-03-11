import React from "react";
class Creator extends React.Component {

  state = {
    name: "",
    content: "",
    author: ""
  }
  
  changer = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitter = e => {
    e.preventDefault()
    const url = 'http://localhost:8080/post';
    (async () => {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      });
      const content = await res.json();
    })();
  }


  render() {
    const { name, content, author } = this.state
    return (
      <div>
        <form onSubmit= { this.submitter }>
          <div>
            <div>
            <p>Wie soll der Post heißen?</p>
              <input
                id="1"
                type="text"
                name="name"
                value = { name }
                onChange = { this.changer }
              />
            </div>
            <br/>
            <div>
            <p>Was soll in deinem Post stehen?</p>
              <input
                type="text"
                name="content"
                value = { content }
                onChange = { this.changer }
              />
            </div>
            <br/>
            <div>
            <p>Wie ist dein Name?</p>
              <input
                type="text"
                name="author"
                value = { author }
                onChange = { this.changer }
              />
            </div>
            <br/>
            <button type="submit">Senden</button>
          </div>
        </form>
      </div>
    )
  }

}

export default Creator;
