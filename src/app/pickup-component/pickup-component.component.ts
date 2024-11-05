import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Item {
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-pickup-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pickup-component.component.html',
  styleUrls: ['./pickup-component.component.css'],
})
export class PickupComponentComponent {
  orderNumber: string = '';
  receiverName: string = '';
  receiverId: string = '';
  showAcceptPopup: boolean = false;
  showItemFields: boolean = false;
  pickupSuccessful: boolean = false;
  confirmationMessage: string | null = null;
  verificationMessage: string | null = null; // Add a new property for verification message

  // Array to hold item details
  items: Item[] = [
    { name: 'Book', quantity: 2 },
    { name: 'Pen', quantity: 5 },
    { name: 'Pencil', quantity: 1 },
  ];

  // Open the accept confirmation popup
  openAcceptPopup() {
    this.showAcceptPopup = true;
  }

  // Close the accept confirmation popup
  closeAcceptPopup() {
    this.showAcceptPopup = false;
  }

  // Verify receiver details and display a success message
  verifyReceiver() {
    this.verificationMessage = 'Receiver verified successfully!'; // Set the verification message
    setTimeout(() => {
      this.verificationMessage = null; // Clear the message after 3 seconds
    }, 1000);
  }

  // Confirm acceptance of the order and show item fields
  confirmAcceptance() {
    this.showAcceptPopup = false;
    this.showItemFields = true;
  }

  // Confirm all items and show success message
  confirmAllItems() {
    this.showItemFields = false;
    this.pickupSuccessful = true;
    this.confirmationMessage = 'Pickup confirmed successfully!';

    // Display the success message for 3 seconds
    setTimeout(() => {
      this.pickupSuccessful = false;
      this.confirmationMessage = null;
      this.resetPickupForm();
    }, 3000);
  }

  // Cancel all items
  cancelAllItems() {
    this.showItemFields = false;
    this.resetPickupForm();
  }

  // Reset the form fields to show the pickup form again
  private resetPickupForm() {
    this.orderNumber = '';
    this.receiverName = '';
    this.receiverId = '';
  }
}
