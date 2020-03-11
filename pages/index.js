import Layout from '../components/Layout.js';
import Fetch from 'isomorphic-unfetch'
import Posts from '../components/Posts.js'
import Dummy from '../components/Dummy.js'

const Index = (props) => (
  <Layout>
    <div>
      <h1>Willkommen auf der simpleSite!</h1>
      <p> Test, ob die API angesprochen wird:</p>
      <p>Fall für size und timeout 0 zurückgegeben wird,
       funktioniert die API korrekt.</p>
      <Dummy val={props.val}/>

    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:8080/');
  const data = await res;
  return{
    val: data
  }
  window.location.reload();
}
export default Index;
