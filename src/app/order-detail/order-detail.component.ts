import { CurrencyPipe } from '@angular/common';
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
  imports: [CurrencyPipe],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.css',
})
export class OrderDetailComponent {
  order: Order = {
    orderNo: 1406,
    name: 'Ana Nancy',
    email: 'nancy@gmail.com',
    phone: '2564789456',
    customerAddress: '1256 NW 20TH ST Gainesville, FL 34562',
    orderDate: '08/23/2024',
    pickupTime: '08/23/2024 08:00 PM',
    items: [
      {
        name: 'Smooth Lather',
        sku: '456234',
        location: 'Shop 34 Floor GA USA',
        quantity: 10,
        priceTotal: 450,
      },
    ],
    subtotal: 450,
    tax: 45,
    total: 495,
  };
}
