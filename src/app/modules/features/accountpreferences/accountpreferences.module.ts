import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccountpreferencesPageRoutingModule } from './accountpreferences-routing.module';
import { AccountpreferencesPage } from './accountpreferences.page';
import { FooterComponent } from '../../shared/component/footer/footer.component';
import { NavbarComponent } from '../../shared/component/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountpreferencesPageRoutingModule
  ],
  declarations: [AccountpreferencesPage,FooterComponent,NavbarComponent]
})
export class AccountpreferencesPageModule {}
