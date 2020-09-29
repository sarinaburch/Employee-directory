import React from "react";
import Table from "./Table";
import SearchForm from "./SearchBar"
import Navbar from './Navbar'


function EmployeeTable() {
  return (
    <div>
      <Navbar />
     
      <div>
        <Table />
      </div>
    </div>
  )
}
export default EmployeeTable;