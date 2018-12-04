import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
  <nav>
  <ul>
    <li>
      <a routerLink="bake">
        <i class="material-icons">BAKE</i>
      </a>
    </li>
    <li>
        <a routerLink="eat">
          <i class="material-icons">EAT</i>
        </a>
      </li>
      <li>
          <a routerLink="count">
            <i class="material-icons">COUNT</i>
          </a>
      </li>
  </ul>
</nav>
<router-outlet></router-outlet>
  `,
  styles: [
    "../node_modules/angular2-busy/build/style/busy.css",
    "styles.css"
  ]
})

export class HomeComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }

}
