import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import $ from 'jquery';
interface Order {
  orderNumber: string;
  customerName: string;
  orderDate: Date;
  amount: number;
  status: string;
  // Add the missing property
  store?: string; // Make it optional with a '?'
}

@Component({
  selector: 'app-filter-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-table.component.html',
  styleUrl: './filter-table.component.css',
})
export class FilterTAbleComponent {
  // ngOnInit() {
  //   $('button').on('click', function () {
  //     $('#result').html('<b>jQuery used in angular by installation.</b>');
  //   });
  //   $('.hi').on('click', function () {
  //     const inputString = $('#fromInput').val();
  //     alert('heello');
  //   });
  //   $('#btn1').on('click', function () {
  //     $('ol').append(' <li>I append a item.</li>');
  //   });
  //   $('#btn2').on('click', function () {
  //     $('.p').append(' <h1>I am here to append text.</h1>  ');
  //   });
  // }


ticketsArray : any[]=[
{
ticketId: "001",
ticketName: "LAyout",
status: "In progress"
},
{
  ticketId: "002",
  ticketName: "LAyout",
  status: "In progress"
},
{
  ticketId: "003",
  ticketName: "LAyout",
  status: "To Do"
}


];
filterTickets(status: string){
return  this.ticketsArray.filter(m=>m.status=status);

}


orders: Order[] = [
  {
    orderNumber: '12345',
    customerName: 'John Doe',
    orderDate: new Date('2023-11-05'),
    amount: 100,
    status: 'Pending'
  },
  // Add more mock orders here
];

filter: any = {
  fromDate: '',
  toDate: '',
  store: '',
  orderNumber: '',
  customerName: ''
};

ngOnInit() {
  // Initially, display all orders
  this.filteredOrders = this.orders;
}

filteredOrders: Order[] = [];

search() {
  this.filteredOrders = this.orders.filter(order => {
    // Implement filtering logic here based on the filter object
    // For example:
    return (
      (!this.filter.fromDate || order.orderDate >= new Date(this.filter.fromDate)) &&
      (!this.filter.toDate || order.orderDate <= new Date(this.filter.toDate)) &&
      (!this.filter.store || order.store === this.filter.store) &&
      (!this.filter.orderNumber || order.orderNumber.includes(this.filter.orderNumber)) &&
      (!this.filter.customerName || order.customerName.includes(this.filter.customerName))
    );
  });
}

clearFilter() {
  this.filter = {
    fromDate: '',
    toDate: '',
    store: '',
    orderNumber: '',
    customerName: ''
  };
  this.filteredOrders = this.orders;
}

viewDetails(orderNumber: string) {
  // Handle viewing order details
  // This could involve navigating to a new route or displaying a modal
  console.log('Viewing details for order:', orderNumber);
}


}
