import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ReceiveOderListComponent } from './receive-oder-list/receive-oder-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { REjectOrderComponent } from './reject-order/reject-order.component';
import { ReturnComponent } from './return/return.component';
import { ReceiveOrderListComponent } from './receive-order-list/receive-order-list.component';
import { PickupComponentComponent } from "./pickup-component/pickup-component.component";
import { ReturnOrderListComponent } from "./return-order-list/return-order-list.component";
import { FilterTAbleComponent } from './filter-table/filter-table.component';
import { VLastComponent } from './v-last/v-last.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReceiveOderListComponent, OrderDetailComponent, REjectOrderComponent,
    ReturnComponent,
    ReceiveOderListComponent,
    OrderDetailComponent,
    REjectOrderComponent,
    ReceiveOrderListComponent, PickupComponentComponent, ReturnOrderListComponent,FilterTAbleComponent,RouterLink,RouterLinkActive,VLastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Anglar1_Pro_Management';
}
