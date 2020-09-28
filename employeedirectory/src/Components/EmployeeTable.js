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
        <nav style={styles.navbar} className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
  {/* eslint-disable-next-line*/}
    <a>
      <img src="ArchieHead.jpg" alt="logo" width="115" height="115" />
    </a>
{/* eslint-disable-next-line*/}
    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
      
    <div className="navbar-start">
        {/* eslint-disable-next-line*/}
      <a className="navbar-item" style={styles.nameFont}>
        Archie Industries</a>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
      </div>
    </div>
  </div>
</nav>
<section className="hero is-light">
  <div className="hero-body ">
    <div className="container has-text-centered ">
      <h1 className="title">
        Employee Directory
      </h1>
      <input className="input is-rounded is-normal" type="text" placeholder="Search Employee By Name" />
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