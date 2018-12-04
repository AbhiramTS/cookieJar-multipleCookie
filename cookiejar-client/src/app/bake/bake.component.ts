import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SawtoothService } from '../sawtooth.service';

@Component({
  selector: 'app-bake',
  template: `
  <div class="bake">
  <div class="form">
    <form class="bake" (submit)="bakeCookie($event)">
      <input id="bake_id" type="text" placeholder="No of cookies"/>
      <input id="type" type="text" placeholder="Type of cookies"/>
      <button id="submit" type="submit" >Bake</button>
    </form>
  </div>
</div>

  `,
  styles: [
    "../node_modules/angular2-busy/build/style/busy.css",
    "styles.css"
  ]
})
export class BakeComponent implements OnInit {

  constructor(private Data : SawtoothService,private router :RouterModule) { }

  ngOnInit() {}
    bakeCookie(event){   
      event.preventDefault()
      const target = event.target
      const bakevalue = target.querySelector('#bake_id').value;
      const type = target.querySelector('#type').value;
      let returnVal = this.Data.sendData('bake', bakevalue, type);
      console.log(bakevalue), returnVal;
      //this.testBake();
    }

    testBake(){
      let bakevalue = 45 ;
      let type = 'chocolate';
      let returnVal = this.Data.sendData('bake', bakevalue, type);
      console.log(bakevalue), returnVal;
      bakevalue = 55 ;
      type = 'gingerbread';
      returnVal = this.Data.sendData('bake', bakevalue, type);
      console.log(bakevalue), returnVal;
      bakevalue = 55 ;
      type = 'vanilla';
      returnVal = this.Data.sendData('bake', bakevalue, type);
      console.log(bakevalue), returnVal;
    }
  

}
