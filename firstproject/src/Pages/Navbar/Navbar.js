import React from "react";

//import { Navbar,Nav,Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="/">Memes</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/new">New</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/posts">Posts</a>
                    </li>
                </ul>
  </div>
</nav>
    </div>
  );
};

export default NavBar;
