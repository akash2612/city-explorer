import { Directive, HostListener } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Directive({
  selector: '[filterData]',
  providers:[
    {provide:FilterData,useClass:FilterData}
  ]
})
export class FilterData {

  constructor(private globalService:GlobalService) { }

  @HostListener('click',['$event']) onClick(event) {
    this.globalService.filterData = this.globalService.placeData.cities.filter(
      item => item.state === event.target.innerText
    );
    if(this.globalService.filterData.length === 0) {
      this.globalService.filterData = this.globalService.placeData.cities;
    }
  }

}
