import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Order {
  id: number;
  orderNumber: string;
  customerName: string;
  orderDate: Date;
  amount: number;
  status: string;
}
@Component({
  selector: 'app-v-last',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './v-last.component.html',
  styleUrl: './v-last.component.css'
})
export class VLastComponent {

  orders: Order[] = [
    { id:   
 1, orderNumber: '12345', customerName: 'John Doe', orderDate: new Date('2023-11-05'), amount: 100, status: 'Pending' },
    // Add more mock orders here
  ];

  selectedOrder: Order | null = null;

  ngOnInit() {
  }

  viewOrderDetails(order: Order) {
    this.selectedOrder = order;
  }

  closeOrderDetails() {
    this.selectedOrder = null;
  }


  
}
