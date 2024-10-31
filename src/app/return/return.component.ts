import { Component } from '@angular/core';

@Component({
  selector: 'app-return',
  standalone: true,
  imports: [],
  templateUrl: './return.component.html',
  styleUrl: './return.component.css'
})
export class ReturnComponent {
  receiptNumber: string = '';
  paymentLast4: string = '';
  itemCode: string = '';
  itemName: string = 'ABC';
  quantity: number = 5;
  unitPrice: number = 10.0;
  
  subTotal: number = 0;
  tax: number = 0;
  total: number = 0;
  amount: number = 0;

  constructor() {
    this.calculateTotal();
  }

  calculateTotal() {
    this.amount = this.quantity * this.unitPrice;
    this.subTotal = this.amount;
    this.tax = this.subTotal * 0.1; // Assuming a 10% tax rate
    this.total = this.subTotal + this.tax;
  }



  // -------------------------------------------------
      
}



