import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class GlobalService {
  constructor(private httpClient: HttpClient) { }

  placeData:any={};
  filterData:any[]=[];

  getPlacesList(){
    return this.httpClient.get('assets/places.json');
  }

  getCityWeather(cityName) {
    return this.httpClient.get('https://weather.ls.hereapi.com/weather/1.0/report.json?product=observation&name='+cityName+'&apiKey=LZMKLv6s5ZVMl1CjoiUUna4QOpIke0HwEeN_Uub6YIE');
  }
  
}
