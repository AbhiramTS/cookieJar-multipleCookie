import { Component, OnInit } from '@angular/core';
import { SawtoothService } from '../sawtooth.service';

@Component({
  selector: 'app-eat',
  template: `
  <div class="eat">
  <div class="form">
    <form class="eat" (submit)="eatCookie($event)">
   
    <input id="eat_id" type="text" placeholder="No of cookies"/>
   
    <button id="submit" type="submit" >Eat</button>
  
    </form>
    </div>
  </div>
  
  `,
  styles: [
    "../node_modules/angular2-busy/build/style/busy.css",
    "styles.css"
  ]
})
export class EatComponent implements OnInit {

  constructor(private Data : SawtoothService) {
    console.log("eat component",this.Data);
   }

  ngOnInit() {
  }
  eatCookie(event){


    // event.preventDefault()
    // const target = event.target
    // const eatvalue = target.querySelector('#eat_id').value;
    // this.Data.sendData("eat", eatvalue);
    }
}
