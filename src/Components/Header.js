import React from 'react';

export default function Header() {
  return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Contacts</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>&nbsp;</form>
      <button className="btn btn-outline-success my-2 my-sm-0"style={{float:"left",marginLeft:"985px"}} type="submit">Search</button>
    
  </div>
</nav>
    
      </div>
  )
}
