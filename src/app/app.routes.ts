import { Routes } from '@angular/router';
import { ReceiveOrderListComponent } from './receive-order-list/receive-order-list.component';
import { ReceiveOderListComponent } from './receive-oder-list/receive-oder-list.component';
import { PickupComponentComponent } from './pickup-component/pickup-component.component';
import { VLastComponent } from './v-last/v-last.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { REjectOrderComponent } from './reject-order/reject-order.component';
import { ReturnComponent } from './return/return.component';
import { ReturnOrderListComponent } from './return-order-list/return-order-list.component';

export const routes: Routes = [
{
  path:"",
  redirectTo:"Livan",
  pathMatch:"full"
},
{
  path:"Livan",
  component:ReceiveOrderListComponent

},
{
  path:"Vattey",
  component:ReceiveOderListComponent
},
{
  path:"Pickup",
  component:PickupComponentComponent
},
{
  path:"ReceiveOrderList1",
  component:VLastComponent
}
,{
  path: "OrderDetail",
  component: OrderDetailComponent
},
{
  path: "RejectOrder",
  component: REjectOrderComponent 
},
{
  path:"Return",
  component: ReturnComponent
},
{
  path:"ReturnOrderList",
  component: ReturnOrderListComponent
}




];
