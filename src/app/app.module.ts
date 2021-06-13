import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMainComponent } from './components/header-main/header-main.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CategSectionComponent } from './components/categ-section/categ-section.component';
import { PopProductsComponent } from './components/pop-products/pop-products.component';
import { PreFooterComponent } from './components/pre-footer/pre-footer.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMainComponent,
    NavBarComponent,
    CategSectionComponent,
    PopProductsComponent,
    PreFooterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
