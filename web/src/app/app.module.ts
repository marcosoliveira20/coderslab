import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './views/login/login.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BasicAutoCompleterComponent } from './component/form/input/input.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { ProfileComponent } from './views/profile/profile.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './views/home/home.component';
import { CardComponent } from './component/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    BasicAutoCompleterComponent,
    ProfileComponent,
    NavbarComponent,
    HomeComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AutocompleteLibModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
