let employees = [];
function addEmployee() {
    let name = document.getElementById("name").value;
    let empId = document.getElementById("empId").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;
    if (name === "" || empId === "" || isNaN(salary) || dept === "") {
        alert("Please fill all fields properly");
        return;
    }
    let employee = {
        name: name,
        id: empId,
        salary: salary,
        department: dept
    };
    employees.push(employee);
    alert("Employee Added Successfully!");
    document.getElementById("name").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("salary").value = "";
    docume…
<!DOCTYPE html>
<html>
<head>
    <title>Employee Salary Management</title>
    <link rel="stylesheet" href="exp2.css">
</head>
<body>
<div class="container">
    <h2>Employee Salary Management System</h2>
    <input type="text" id="name" placeholder="Employee Name">
    <input type="text" id="empId" placeholder="Employee ID">
    <input type="number" id="salary" placeholder="Salary">
    <input type="text" id="dept" placeholder="Department">
    <button onclick="addEmployee()">Add Employee</button>
    <button onclick="displayEmployees()">Display All</button>
    <button onclick="filterSalary()">Salary > 50000</button>
    <button onclick="totalSalary()">Total Salary</button>
    <button onclick="averageSalary()">Average Salary</button>
    <button onclick=…
body {
    font-family: Arial;
    background-color: #eef2f3;
    text-align: center;
}
.container {
    width: 650px;
    margin: 40px auto;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 10px gray;
}
input {
    padding: 8px;
    margin: 5px;
}
button {
    padding: 8px 12px;
    margin: 5px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
button:hover {
    background-color: #1e7e34;
}
#output {
    margin-top: 20px;
    text-align: left;
}