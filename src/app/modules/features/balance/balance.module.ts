import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { IonicModule } from '@ionic/angular';
import { BalancePageRoutingModule } from './balance-routing.module';
import { BalanceComponent } from './balance.component';
import { FooterComponent } from '../../shared/component/footer/footer.component';
import { NavbarComponent } from '../../shared/component/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalancePageRoutingModule,
    AgGridModule.withComponents([]),
  ],
  declarations: [BalanceComponent,FooterComponent,NavbarComponent],
  exports: [],
  schemas: []
})
export class BalancePageModule {}
