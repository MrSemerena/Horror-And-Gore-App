import { HomeBodyCardUiComponent } from './components/home/home-body-card-ui/home-body-card-ui.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomeHeaderSliderComponent } from './components/home/home-header-slider/home-header-slider.component';
import { HomeBodyBannersComponent } from './components/home/home-body-banners/home-body-banners.component';


import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [
    HomeHeaderSliderComponent,
    HomeBodyBannersComponent,
    HomeBodyCardUiComponent
  ],
  exports: [
    HomeHeaderSliderComponent,
    HomeBodyBannersComponent,
    HomeBodyCardUiComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
