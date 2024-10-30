import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReceiveOderListComponent } from './receive-oder-list/receive-oder-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { REjectOrderComponent } from './reject-order/reject-order.component';
<<<<<<< HEAD
import { ReturnComponent } from './return/return.component';
=======
import { ReceiveOrderListComponent } from './receive-order-list/receive-order-list.component';
>>>>>>> 5a2de9699993625534c9d309661a579c2553c124

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, ReceiveOderListComponent, OrderDetailComponent,REjectOrderComponent
    ,ReturnComponent
=======
  imports: [
    RouterOutlet,
    ReceiveOderListComponent,
    OrderDetailComponent,
    REjectOrderComponent,
    ReceiveOrderListComponent,
>>>>>>> 5a2de9699993625534c9d309661a579c2553c124
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Anglar1_Pro_Management';
}
