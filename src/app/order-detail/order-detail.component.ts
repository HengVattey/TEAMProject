import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

interface OrderItem {
  name: string;
  sku: string;
  location: string;
  quantity: number;
  priceTotal: number;
}

interface Order {
  orderNo: number;
  name: string;
  email: string;
  phone: string;
  customerAddress: string;
  orderDate: string;
  pickupTime: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  total: number;
}

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
})
export class OrderDetailComponent {
  order: Order = {
    orderNo: 3338,
    name: 'LivAn Chreom',
    email: 'Livan@gmail.com',
    phone: '0978024082',
    customerAddress: '33, Theuk tha, Sea Sok, PP',
    orderDate: '02/01/2026',
    pickupTime: '02/10/2026 08:00 AM',
    items: [
      {
        name: 'Mustang',
        sku: '456234',
        location: '444, #93 Preah Monivong Blvd (93), Phnom Penh',
        quantity: 1,
        priceTotal: 20000,
      },
      // Add more items as needed
    ],
    subtotal: 20000,
    tax: 30,
    total: 20030,
  };
}
