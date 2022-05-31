import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  isConfirmed = false;
  name: string;

  

  constructor() {}

  toggleButton(){
    //this.isConfirmed = !this.isConfirmed;  
    //console.log("isConfirmed: ",this.isConfirmed);

    alert("Wer ist da ?");
  }
  
  askName(){
    
    var readInput = prompt("Ich bin: ");
    this.name = readInput;
  
    alert("was geht " +readInput+ "?");

  }
}