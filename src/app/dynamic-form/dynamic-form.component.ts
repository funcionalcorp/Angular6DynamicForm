import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  types = [
    { id : 0, name: 'number'},
    { id : 1, name: 'string'},
    { id : 2, name: 'date'},
    { id : 3, name: 'decimal'}
  ];

  fields :Array<any> = [{ name : 'name', type : 1 }];

  addField = function() {
    this.fields.push({
      name : '', type : 0
    });
  }
}
