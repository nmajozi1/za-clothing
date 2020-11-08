import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomComponent } from './custom/custom.component';
import { PreDesignedComponent } from './pre-designed/pre-designed.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LargeCardComponent } from './large-card/large-card.component';
import { FooterComponent } from './footer/footer.component';
import { GalaryComponent } from './galary/galary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomComponent,
    PreDesignedComponent,
    NavBarComponent,
    LargeCardComponent,
    FooterComponent,
    GalaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
