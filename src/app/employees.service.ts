import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class EmployeeService {

    employees = [
        {firstName:"Rishabh",lastName:"Rajpal",department:"developer",dob:"1996-04-14",gender:"male"}
    ];

    constructor(private http: HttpClient) {

    }
    getEmployees() {
        return this.employees;
    }
    addEmployee(employee){
        this.employees.push(employee);
    }
    deleteEmployee(index){
        this.employees.splice(index,1);
    }
    getEmployeeById(index){
        return this.employees[index];
    }
    editEmployee(employee,index){
        this.employees[index] = employee;
    }
}