import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface Order {
  orderNumber: number;
  customerName: string;
  orderDate: string;
  amount: number;
}

@Component({
  selector: 'app-return-order-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './return-order-list.component.html',
  styleUrl: './return-order-list.component.css'
})
export class ReturnOrderListComponent {
  searchValue: string = ''; 
  orders: Order[] = [
      { 
        orderNumber: 1402, 
        customerName: 'Bora Vuth', 
        orderDate: '08/23/2024', 
        amount: 24.5 
      },
      {
        orderNumber: 2313,
        customerName: 'Barbie',
        orderDate: '09/30/2024', // Corrected to a valid date
        amount: 29
      },
      {
        orderNumber: 2132,
        customerName: 'Ken',
        orderDate: '07/23/2024', // Updated to full year format
        amount: 98.3
      },
      {
        orderNumber: 1456,
        customerName: 'Lina Chann',
        orderDate: '10/12/2024',
        amount: 56.75
      },
      {
        orderNumber: 1768,
        customerName: 'John Smith',
        orderDate: '11/05/2024',
        amount: 45.0
      },
      {
        orderNumber: 1892,
        customerName: 'Sophia Kim',
        orderDate: '12/20/2024',
        amount: 112.5
      },
      {
        orderNumber: 1945,
        customerName: 'Alex Tan',
        orderDate: '01/15/2024',
        amount: 38.9
      },
      {
        orderNumber: 2098,
        customerName: 'Emily Chen',
        orderDate: '03/02/2024',
        amount: 73.25
      },
      {
        orderNumber: 2143,
        customerName: 'Michael Wong',
        orderDate: '04/18/2024',
        amount: 49.99
      },
      {
        orderNumber: 2250,
        customerName: 'Chris Li',
        orderDate: '06/30/2024',
        amount: 84.75
      }
  ];
  filteredOrders: Order[] = [...this.orders];

  searchOrder(): void {
    const searchValue = this.searchValue.trim();
    this.filteredOrders = this.orders.filter(order =>
      order.orderNumber.toString().includes(searchValue)
    );
  }
}
