import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './componente/hero/hero.component';
import { AddHeroComponent } from './componente/add-hero/add-hero.component';
import { HttpRequestService } from './services/http-request.service';
import { NotFoundComponent } from './componente/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AddHeroComponent,
    NotFoundComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    FormsModule,
    HeroComponent,
    AddHeroComponent,
  ],
  providers: [  HttpRequestService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
