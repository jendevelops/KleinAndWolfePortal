import React from 'react';
import {connect} from 'react-redux';

function NavBar(props) {

   let  navbar = <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#/">Home<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/livefeedtable">Live Feed <span className="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>;
  return navbar;
}

export default connect()(NavBar);
