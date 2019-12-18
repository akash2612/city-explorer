import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './components/main/main-view/main-view.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterData } from './shared/directives/custom.directive';
import { DetailViewComponent } from './components/details/detail-view/detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    FilterData,
    DetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
