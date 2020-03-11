import Link from 'next/link'

const NavBar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
      <a className="navbar-brand" href="#">simpleSite</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/index"><a className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/displayPosts"><a className="nav-link">Posts Anzeigen</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/createPost"><a className="nav-link">Post erstellen</a></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
export default NavBar;
