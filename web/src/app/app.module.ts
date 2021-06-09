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
import { HomeGroupComponent } from './views/group/home-group/home-group.component';
import { DetailGroupComponent } from './views/group/detail-group/detail-group.component';
import { NewGroupComponent } from './views/group/new-group/new-group.component';
import { ExploreGroupComponent } from './views/group/explore-group/explore-group.component';
import { ModalComponent } from './component/modal/modal.component';
import { HomeRoadmapComponent } from './views/roadmap/home-roadmap/home-roadmap.component';
import { NewRoadmapComponent } from './views/roadmap/new-roadmap/new-roadmap.component';
import { ListRoadmapComponent } from './views/roadmap/list-roadmap/list-roadmap.component';
import { DetailRoadmapComponent } from './views/roadmap/detail-roadmap/detail-roadmap.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { LineChartComponent } from './component/line-chart/line-chart.component';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { AccordionComponent } from './component/accordion/accordion.component';
import { LoaderComponent } from './component/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    BasicAutoCompleterComponent,
    ProfileComponent,
    NavbarComponent,
    HomeComponent,
    CardComponent,
    HomeGroupComponent,
    DetailGroupComponent,
    NewGroupComponent,
    ExploreGroupComponent,
    ModalComponent,
    HomeRoadmapComponent,
    NewRoadmapComponent,
    ListRoadmapComponent,
    DetailRoadmapComponent,
    LineChartComponent,
    AccordionComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AutocompleteLibModule,
    CommonModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [ThemeService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
