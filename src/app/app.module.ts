import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { DataViewModule } from 'primeng-lts/dataview';
import { DropdownModule } from 'primeng-lts/dropdown';
import { InputTextModule } from 'primeng-lts/inputtext';
import { TooltipModule } from 'primeng-lts/tooltip';
import {ButtonModule} from 'primeng-lts/button';

import { AppComponent } from './app.component';
import { ListCocktailComponent } from './list-cocktail/list-cocktail.component';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCocktailComponent,
    CocktailDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DataViewModule,
    DropdownModule,
    InputTextModule,
    TooltipModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
