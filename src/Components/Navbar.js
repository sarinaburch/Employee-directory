import React from 'react';

const styles = {
    navbar: {
      height: "120px"
    },
    nameFont: {
      fontSize: "34px",
      fontWeight: "bold"
    }
};

function Navbar() {
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

        </div>
    )
}
export default Navbar;