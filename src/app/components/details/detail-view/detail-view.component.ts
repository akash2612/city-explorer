import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {

  constructor(private gs:GlobalService) { }

  cityName:String='';
  cityWeather:any={};
  weatherIcon:String = '';
  weatherObj:any[]=[
    {
      'sky':'Haze',
      'daylight':'D',
      'iconClass':'icon-fog-day'
    },
    {
      'sky':'Haze',
      'daylight':'N',
      'iconClass':'icon-fog-night'
    },
    {
      'sky':'Fog',
      'daylight':'D',
      'iconClass':'icon-fog-day'
    },
    {
      'sky':'Fog',
      'daylight':'N',
      'iconClass':'icon-fog-night'
    },
    {
      'sky':'Clear',
      'daylight':'D',
      'iconClass':'icon-clear-day'
    },
    {
      'sky':'Clear',
      'daylight':'N',
      'iconClass':'icon-clear-night'
    },
    {
      'sky':'Sunny',
      'daylight':'D',
      'iconClass':'icon-clear-day'
    },
    {
      'sky':'Cloud',
      'daylight':'D',
      'iconClass':'icon-cloud'
    },
    {
      'sky':'Cloud',
      'daylight':'N',
      'iconClass':'icon-cloud'
    },
    {
      'sky':'Rain',
      'daylight':'D',
      'iconClass':'icon-rain'
    },
    {
      'sky':'Rain',
      'daylight':'N',
      'iconClass':'icon-rain'
    }
  ]

  ngOnInit() {
    this.cityName = history.state.city;
    this.fetchWeather();
  }

  fetchWeather(){
    this.gs.getCityWeather(this.cityName).subscribe(res=> {
      this.cityWeather = res;
      for(let i=0;i<this.weatherObj.length;i++) {
        if(this.cityWeather.observations.location[0].observation[0].skyDescription.toLowerCase().includes(this.weatherObj[i].sky.toLowerCase()) && this.cityWeather.observations.location[0].observation[0].daylight === this.weatherObj[i].daylight) {
          this.weatherIcon = this.weatherObj[i].iconClass;
          break;
        }
      }
    },err=> {
      console.log(err);
    })
  }

}
