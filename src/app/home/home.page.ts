import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isConfirmed = false;
  constructor() {}

  toggleButton(){
    this.isConfirmed = !this.isConfirmed;  
    console.log("isConfirmed: ",this.isConfirmed);
  }

}
