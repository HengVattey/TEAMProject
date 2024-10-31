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
    { orderNumber: 1402, customerName: 'Bora Vuth', orderDate: '08/23/2024', amount: 24.5 },
    // Add more orders here if needed
  ];
  filteredOrders: Order[] = [...this.orders];

  searchOrder(): void {
    const searchValue = this.searchValue.trim();
    this.filteredOrders = this.orders.filter(order =>
      order.orderNumber.toString().includes(searchValue)
    );
  }
}
