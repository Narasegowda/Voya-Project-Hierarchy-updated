import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { App, Capacitor, NetworkStatus, PluginListenerHandle, Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
import { AlertsService } from '../../shared/service/bio-metric-service/alerts.service';
import { StorageService } from '../../shared/service/bio-metric-service/storage.service';
import { ValidationService } from '../../shared/service/login-validation-service/validation.service';

//import { FormGroup } from '@angular/forms';
const { Network } = Plugins;
const { Browser } = Plugins;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  completed;
  password: string = "";
  username: string = "";
  //credentialForm: FormGroup;
  constructor(private alerts: AlertsService, private storage: StorageService, private validation: ValidationService, private cookieService: CookieService, private router: Router) {

  }

  async ngOnInit() {
    let Biometric = await this.storage.get('biometric');
    if (Biometric === true) {
      this.unLock();
    }
  }

  updateItem(item) {
    console.log(item.detail.checked);
    //this.alerts.ConfirmAIO();
    if (item.detail.checked) {
      this.storage.set('biometric', item.detail.checked);
    } else {
      this.storage.remove('biometric');
    }

  }
  async unLock() {
    let Biometric = await this.storage.get('biometric');
    if (Biometric) {
      this.alerts.fingerPrintAIO()

    }
  }
  async removeData() {
    await this.storage.remove('user_pass');
    await this.storage.remove('biometric');
    this.alerts.toastInfo("Data Removed!")
  }
  vdsPage() {
    this.router.navigateByUrl("/vds");
  }
  getUserlName(){
    return `${this.username}`;
  }
  getPassword(){
    return `${this.password}`;
  }
  async openPage() {
    this.validation.checkUsernameAndPassword(this.username,this.password);
    this.validation.checkPassword(this.password);
    let Password = await this.storage.get('user_pass');
    if (true) {
      this.alerts.toastInfo('Welcome');
      this.alerts.setPass(this.password)
    } else {
      this.alerts.toastInfo('Please check username and password');
    }
  }
  togglePassword(str) {
    if (str === 'hide') {
      document.getElementById(str).style.display = "none";
      document.getElementById('show').style.display = "block";
      document.getElementById("password").setAttribute("type", "password");
    } else {
      document.getElementById(str).style.display = "none";
      document.getElementById('hide').style.display = "block";
      document.getElementById("password").setAttribute("type", "text");
    }
  }
}
