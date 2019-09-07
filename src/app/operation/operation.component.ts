import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {
  public operation = 'sumar';
  public num1: number;
  public num2: number;
  @Output() data = new EventEmitter();
  constructor() {
  }
  operar() {
   if (Number(this.num1) && Number(this.num2)) {
     const a = Number(this.num1);
     const b = Number(this.num2);
     let result;
     switch (this.operation) {
       case 'sumar':
         result = a + b;
         break;
       case 'restar':
         result = a - b;
         break;
       case 'multiplicar':
         result = a * b;
         break;
       case 'dividir':
         result = a / b;
         break;
     }
     this.data.emit({
       number1: this.num1,
       number2: this.num2,
       result
     });
   } else {
      alert('No se puede realizar la operación');
      this.num1 = 0;
      this.num2 = 0;
   }
  }
  ngOnInit() {
  }

}
