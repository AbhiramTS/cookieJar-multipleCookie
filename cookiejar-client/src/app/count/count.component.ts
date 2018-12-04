import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SawtoothService } from '../sawtooth.service';

@Component({
  selector: 'app-count',
  template: `
  <div class="count">
  <div class="form">
   <form class="count"(submit)="countCookie($event)">
  
     <input id="count_id" type="text" placeholder="Name"/>
  
     <button id="submit" type="submit" >Count</button>
 
   </form>
   </div>
 </div>
 
 
  `,
  styles: [
    "../node_modules/angular2-busy/build/style/busy.css",
    "styles.css"
  ]
})



export class CountComponent implements OnInit {

  constructor(private Data : SawtoothService, private router :RouterModule) {
    console.log("haiii")
   }

  ngOnInit() {
console.log("oninit..")
    this.Data.sendToRestAPI(null)
    //.then((response) => response.json())
    .then((responseJson) => {
            console.log(responseJson);
            alert(responseJson);
          })
          .catch((error) => {
       console.error(error);
          });    
          
        }
       
         
    
  countCookie(event){
    event.preventDefault()
    const target = event.target
    const count = target.querySelector('#count_id').value;
    let cookie= this.Data.sendToRestAPI(null);
    console.log(count)

    // this.countCookie = this.pubsub.subscribe('pleaseCloseSidenav').subscribe((from) => {
        //     this.sidenavOpened = false;
        // });

        // // usage of subscribe(event: string, callback: (value: any) => void, error?: (error: any) => void, complete?: () => void): Subscription;
        // this.openSidenavSub = this.pubsub.subscribe('pleaseOpenSidenav', (from) => {
        //     this.sidenavOpened = true;
        // });
   
   
    // this.Data.getUserDetails(username)
  }
}