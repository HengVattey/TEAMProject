import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReceiveOderListComponent } from './receive-oder-list/receive-oder-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { REjectOrderComponent } from './reject-order/reject-order.component';
import { ReceiveOrderListComponent } from './receive-order-list/receive-order-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReceiveOderListComponent,
    OrderDetailComponent,
    REjectOrderComponent,
    ReceiveOrderListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Anglar1_Pro_Management';
}
