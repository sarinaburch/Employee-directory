import React from "react";
import Table from "./Table";
import SearchBar from "./SearchBar"
import Navbar from './Navbar'


function EmployeeTable() {
  return (
    <div>
      <Navbar />
      <section className="hero is-light">
     <div className="hero-body ">
       <div className="container has-text-centered ">
      <h1 className="title">
        Employee Directory
      </h1>
        <SearchBar />
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