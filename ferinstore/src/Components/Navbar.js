export default function Navbar(){
    return(
        
            <nav className="navbar-expand-lg">
  <a className="navbar-brand" href="#">FerinSTORE</a>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Collections</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Blog</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">FAQs</a>
      </li>
    </ul>
  </div>
  
</nav>
       
    )
}