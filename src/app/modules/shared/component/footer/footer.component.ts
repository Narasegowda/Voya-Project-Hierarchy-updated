import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    this.pageRoute('/balance');
  }
  pageRoute(str){
    // const homeDOM = document.getElementById('home');
    // homeDOM.style.borderTop ="none";
    // homeDOM.style.borderRadius ="none";

    // const balanceDOM = document.getElementById('balance');
    // balanceDOM.style.borderTop ="none";
    // balanceDOM.style.borderRadius ="none";

    // const contributionsDOM = document.getElementById('contributions');
    // contributionsDOM.style.borderTop ="none";
    // contributionsDOM.style.borderRadius ="none";

    // const investmentsDOM = document.getElementById('investments');
    // investmentsDOM.style.borderTop ="none";
    // investmentsDOM.style.borderRadius ="none";

    // const strDOM = document.getElementById(str);
    // strDOM.style.borderTop ="5px solid #d95525";
    // strDOM.style.borderRadius ="7px 8px 3px 37px";

    if(str === 'home'){
      this.router.navigateByUrl('/home');
    }else if(str === 'balance'){
      this.router.navigateByUrl('/balance');
    }else if(str === 'contributions'){
      this.router.navigateByUrl('/balance');
    }else if(str === 'investments'){
      this.router.navigateByUrl('/balance');
    }
  }
}
