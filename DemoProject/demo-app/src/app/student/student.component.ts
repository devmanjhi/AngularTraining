import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    firstname:String
    lastname:String
    @Input()
    age:number
    @Input()
    studentObject;

    @Output()
    changeEvent = new EventEmitter();

    onClick() {
      this.changeEvent.emit();
    }

  
}
