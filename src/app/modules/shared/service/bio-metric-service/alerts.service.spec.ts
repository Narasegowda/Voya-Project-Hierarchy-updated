import { TestBed } from '@angular/core/testing';
import { UrlSerializer } from '@angular/router';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { AlertController, ToastController, NavController } from '@ionic/angular';
import { AlertsService } from './alerts.service';
import { StorageService } from './storage.service';

describe('AlertsService', () => {
  let service: AlertsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [AlertsService,StorageService,NavController,ToastController,AlertController,UrlSerializer,FingerprintAIO],
      imports: [],
    });
    service = TestBed.inject(AlertsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
