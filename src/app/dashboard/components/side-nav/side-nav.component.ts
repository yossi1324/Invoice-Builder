import {Component, NgZone, OnInit} from '@angular/core';
const MAX_WIDTH_BREAKPOINT = 720;
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  links = [{
    name: 'Invoices',
    url: 'invoices'
  },{
    name: 'Clients',
    url: 'clients'
  }];

  private mediaMatcher: MediaQueryList = matchMedia('(max-width : ' + MAX_WIDTH_BREAKPOINT + 'px)');
  constructor(zone: NgZone) {
    this.mediaMatcher.addListener((mql) => {
      zone.run(() => this.mediaMatcher = mql);
    });
  }

  ngOnInit() {
  }

  isScreenSmall() {
    return this.mediaMatcher.matches;
  }
}
