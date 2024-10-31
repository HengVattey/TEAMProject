import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReceiveOderListComponent } from './receive-oder-list/receive-oder-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { REjectOrderComponent } from './reject-order/reject-order.component';
import { ReturnComponent } from './return/return.component';
import { ReceiveOrderListComponent } from './receive-order-list/receive-order-list.component';
import { PickupComponentComponent } from "./pickup-component/pickup-component.component";
import { ReturnOrderListComponent } from "./return-order-list/return-order-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReceiveOderListComponent, OrderDetailComponent, REjectOrderComponent,
    ReturnComponent,
    RouterOutlet,
    ReceiveOderListComponent,
    OrderDetailComponent,
    REjectOrderComponent,
    ReceiveOrderListComponent, PickupComponentComponent, ReturnOrderListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Anglar1_Pro_Management';
}
