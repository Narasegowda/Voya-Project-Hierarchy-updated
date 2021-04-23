import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { AlertsService } from '../../shared/service/bio-metric-service/alerts.service';
import { LoginComponent } from './login.component';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers:[AlertsService, FingerprintAIO,FormBuilder],
      imports: [RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('username validation unit test in jasmine', () =>{
    const app = fixture.componentInstance;
    app.username = "test";
    expect((app as any).getUserlName()).toEqual("test");
   // expect(component.username).toBe('test');
  });

  it('password validation unit test in jasmine', () =>{
    const app = fixture.componentInstance;
    app.password = "1234";
    expect((app as any).getPassword()).toEqual("1234");
   // expect(component.username).toBe('test');
  });

});
