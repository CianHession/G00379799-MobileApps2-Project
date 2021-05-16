import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage{
  lat:any;
  long:any;
  constructor(private geolocation: Geolocation) {}

  Location(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude
      this.long = resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
}
