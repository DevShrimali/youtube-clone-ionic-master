import { Component} from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import CardData from '../../assets/data/crd.json';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page {
  cards =[];

  constructor() { 

  // this.cards = homeData;
  
    setTimeout(() => {
      this.cards = CardData;
    }, 1000);
  }

  doRefresh(event: RefresherCustomEvent) {
      setTimeout(() => {
        event.target.complete();
      }, 1500);
    }

}
