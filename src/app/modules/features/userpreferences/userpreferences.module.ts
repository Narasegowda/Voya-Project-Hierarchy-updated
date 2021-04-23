import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserpreferencesPageRoutingModule } from './userpreferences-routing.module';
import { UserpreferencesPage } from './userpreferences.page';
import { AgGridModule } from 'ag-grid-angular';
import { FooterComponent } from '../../shared/component/footer/footer.component';
import { NavbarComponent } from '../../shared/component/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserpreferencesPageRoutingModule,
    AgGridModule.withComponents([]),
  ],
  declarations: [UserpreferencesPage,FooterComponent,NavbarComponent],
  exports: [],
  schemas: []
})
export class UserpreferencesPageModule {}
