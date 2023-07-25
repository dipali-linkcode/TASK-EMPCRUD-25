      
   import { Component, OnInit } from '@angular/core';
   import { IndexedDbService } from 'src/app/services/storage-.service';
   import { FormBuilder, FormGroup, Validators } from '@angular/forms';
   
   @Component({
     selector: 'app-admin',
     templateUrl: './admin.component.html',
     styleUrls: ['./admin.component.scss']
   })
   export class AdminComponent implements OnInit {
   error:any;
     employee = {
       name: '',
       designation: '',
       time: '',
       contact: '',
       city: ''
     }
   
     allemployees: any;
     pageState: string = "Submit";
   
   
     constructor(
       private storage: IndexedDbService
     ) { 
      this.getAllEmployees();
     }
   
     async ngOnInit() {
      //  this.getAllEmployees();
      
     }
   
   
     async storeData() {
       console.log(this.employee)
       this.storage.addItem(this.employee);
       // get data
       this.allemployees = await this.storage.getAllItems();
       console.log(this.allemployees);
     }
   
     async delete(id: any) {
       this.storage.deleteItem(id);
       this.allemployees = await this.storage.getAllItems();
     }
     update() {
       debugger;
       this.storage.updateItem(this.employee);
   
     }
   
     async updateData(updatedEmployee: any) {
       const allEmployees = await this.storage.getAllItems();
       const employeeToUpdate = allEmployees.find((employee: any) => employee.id === updatedEmployee.id);
   
       if (employeeToUpdate) {
         this.employee.name = updatedEmployee.name;
         this.employee.designation = updatedEmployee.designation;
         this.employee.time = updatedEmployee.time;
         this.employee.contact = updatedEmployee.contact;
         this.employee.city = updatedEmployee.city;
         this.pageState = "Update";
       } else {
         console.error('Employee not found.');
       }
       this.getAllEmployees();
     }
   
    async getAllEmployees() {
      //  this.storage.getAllItems();
      this.allemployees = await this.storage.getAllItems();
     }
   
   }
   