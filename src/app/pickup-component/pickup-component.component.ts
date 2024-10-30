import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReceiveOrderListComponent } from '../receive-order-list/receive-order-list.component';
import { CommonModule } from '@angular/common';

interface Item {
  name: string;
  quantity: number;
}
@Component({
  selector: 'app-pickup-component',
  standalone: true,
  imports: [FormsModule, ReceiveOrderListComponent, CommonModule],
  templateUrl: './pickup-component.component.html',
  styleUrl: './pickup-component.component.css',
})
export class PickupComponentComponent {
  orderNumber: string = '';
  receiverName: string = '';
  receiverId: string = '';
  showAcceptPopup: boolean = false;
  showItemFields: boolean = false;

  // Array to hold item details
  items: Item[] = [
    { name: '', quantity: 0 },
    { name: '', quantity: 0 },
    { name: '', quantity: 0 },
  ];

  // Open the accept confirmation popup
  openAcceptPopup() {
    this.showAcceptPopup = true;
  }

  // Close the accept confirmation popup
  closeAcceptPopup() {
    this.showAcceptPopup = false;
  }

  // Verify receiver details (placeholder function)
  verifyReceiver() {
    console.log('Receiver verified');
  }

  // Confirm acceptance of the order and show item fields
  confirmAcceptance() {
    this.showAcceptPopup = false;
    this.showItemFields = true;
    console.log('Order Accepted:', {
      orderNumber: this.orderNumber,
      receiverName: this.receiverName,
      receiverId: this.receiverId,
      items: this.items,
    });
  }
}
