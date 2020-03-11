import Layout from '../components/Layout.js';
import fetch from 'isomorphic-fetch'
import Posts from '../components/Posts.js';

const displayPosts = (props) => (
  <Layout>
    <div>
      <p>Aktuelle Posts auf dem Server:</p>
      <Posts posts= {props.posts}/>
    </div>
  </Layout>
);


export default displayPosts;
