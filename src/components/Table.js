import React, { useState, useContext } from "react";
import { useGet } from "../utils/API";
import "./Table.css";
import Button from "./Button.js";
import { EmployeeContext } from "./EmployeeContext.js";

//Check out 20-State/03-Stu_useState
function Table() {
  const [url] = useState("https://randomuser.me/api/?results=20");
  const { sortFunc } = useGet(url);
  const { displayedEmployees } = useContext(EmployeeContext);

  return (
    <table>
      <thead>
        <tr>
          <td onClick={() => sortFunc("name")}>
            <Button>First Name</Button>
          </td>
          <td>Last Name</td>
          <td>Gender</td>
          <td>E-mail</td>
          <td onClick={() => sortFunc("age")}>
            <Button>Age</Button>
          </td>
        </tr>
      </thead>
      <tbody>
        {displayedEmployees.map(employee => {
          return (
            <tr key={employee.login.uuid}>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.gender}</td>
              <td>{employee.email}</td>
              <td>{employee.dob.age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;
