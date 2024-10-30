import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-receive-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './receive-order-list.component.html',
  styleUrls: ['./receive-order-list.component.css'],
})
export class ReceiveOrderListComponent {
  // Order lists for each stage
  receivedOrders = [
    '1402',
    '1403',
    '1404',
    '1405',
    '1406',
    '1407',
    '1408',
    '1409',
    '1410',
    '1411',
    '1302',
    '1303',
    '1304',
    '1305',
    '1306',
    '1307',
    '1308',
    '1309',
    '1310',
    '1311',
  ];
  preparingOrders: string[] = [];
  readyToPickupOrders: string[] = [];

  // Active tab to display
  activeTab: 'received' | 'preparing' | 'readyToPickup' = 'received';

  // Control for showing items in each tab and toggle all items
  itemsToShow: { received: number; preparing: number; readyToPickup: number } =
    { received: 5, preparing: 5, readyToPickup: 5 };
  showAllItems: {
    received: boolean;
    preparing: boolean;
    readyToPickup: boolean;
  } = { received: false, preparing: false, readyToPickup: false };

  // Method to change the active tab
  setActiveTab(tab: 'received' | 'preparing' | 'readyToPickup') {
    this.activeTab = tab;
  }

  // Method to toggle the number of items displayed in the table for the active tab
  loadMore() {
    if (this.showAllItems[this.activeTab]) {
      this.itemsToShow[this.activeTab] = 5; // Reset to initial limit
    } else {
      this.itemsToShow[this.activeTab] = this.getOrdersList().length; // Show all items
    }
    this.showAllItems[this.activeTab] = !this.showAllItems[this.activeTab];
  }

  // Helper to get the active orders list based on the active tab
  getOrdersList() {
    return this.activeTab === 'received'
      ? this.receivedOrders
      : this.activeTab === 'preparing'
      ? this.preparingOrders
      : this.readyToPickupOrders;
  }

  // Move order to "Preparing" stage from "Received"
  moveToPreparing(orderNo: string) {
    this.receivedOrders = this.receivedOrders.filter(
      (order) => order !== orderNo
    );
    this.preparingOrders.push(orderNo);
  }

  // Move order to "Ready to Pickup" stage from "Preparing"
  moveToReadyToPickup(orderNo: string) {
    this.preparingOrders = this.preparingOrders.filter(
      (order) => order !== orderNo
    );
    this.readyToPickupOrders.push(orderNo);
  }

  // Move order back to "Received" from "Preparing"
  moveToReceived(orderNo: string) {
    this.preparingOrders = this.preparingOrders.filter(
      (order) => order !== orderNo
    );
    this.receivedOrders.push(orderNo);
  }

  // Move order back to "Preparing" from "Ready to Pickup"
  moveToPreparingFromReady(orderNo: string) {
    this.readyToPickupOrders = this.readyToPickupOrders.filter(
      (order) => order !== orderNo
    );
    this.preparingOrders.push(orderNo);
  }
}
