import React from "react";

const styles = {
    navbar: {
      height: "120px"
    }
};


function EmployeeTable() {
    return (
        <nav style={styles.navbar} class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a>
      <img src="ArchieHead.jpg" alt="logo" width="115" height="115" />
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Archie Industries</a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
      </div>
    </div>
  </div>
</nav>
    )
}
export default EmployeeTable;