import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FooterComponent } from '../../shared/component/footer/footer.component';
import { NavbarComponent } from '../../shared/component/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AgGridModule.withComponents([]),
  ],
  declarations: [HomeComponent,FooterComponent,NavbarComponent],
  exports: [],
  schemas: []
})
export class HomePageModule {}
