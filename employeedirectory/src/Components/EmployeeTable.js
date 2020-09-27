import React from "react";
import Table from "./Table";

const styles = {
    navbar: {
      height: "120px"
    },
    nameFont: {
        fontSize: "34px",
        fontWeight: "bold"
    },
    h1: {
        textAligned: "center"
    }
};


function EmployeeTable() {
    return (
        <div>
        <nav style={styles.navbar} class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
  {/* eslint-disable-next-line*/}
    <a>
      <img src="ArchieHead.jpg" alt="logo" width="115" height="115" />
    </a>
{/* eslint-disable-next-line*/}
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
      
    <div class="navbar-start">
        {/* eslint-disable-next-line*/}
      <a class="navbar-item" style={styles.nameFont}>
        Archie Industries</a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
      </div>
    </div>
  </div>
</nav>
<section class="hero is-light">
  <div class="hero-body ">
    <div class="container has-text-centered ">
      <h1 class="title">
        Employee Directory
      </h1>
      <input class="input is-rounded is-normal" type="text" placeholder="Search Employee By Name" />
    </div>
  </div>
</section>
<div>
    <Table />
</div>
</div>
    )
}
export default EmployeeTable;