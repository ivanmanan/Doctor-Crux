// This will be my header file

import React, { Component } from "react";


const navigation = (

  <nav className="navbar navbar-inverse navbar-fixed-top" id="top-panel">
	<div className="container-fluid">
	  <div className="navbar-header">
		<h1 className="navbar-brand" id="heading">
		  Doctor Crux
		</h1>
	  </div>

	  <ul className="nav navbar-nav navbar-right" id="header-links">
		<li id="allow-hover"><a href="/">Home</a></li>
		<li id="allow-hover"><a>Account</a></li>
	  </ul>
	</div>

  </nav>
);


class Layout extends Component {
  render() {
	return navigation;
  }
}
export default Layout;
