import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor(private globalService:GlobalService,private router:Router) { }

  selectedCity:String='';

  ngOnInit() {
    this.fetchPlaceList();
  }

  fetchPlaceList() {
    this.globalService.getPlacesList().subscribe(res=> {
      this.globalService.placeData = res;
      this.globalService.filterData = this.globalService.placeData.cities;
      console.log(this.globalService.placeData);
    })
  }

  goToDetail($event) {
    this.selectedCity = $event.target.innerText;
    this.router.navigate(['/details'],{state:{city:this.selectedCity}});
  }

}
