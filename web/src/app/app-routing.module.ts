import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ProfileComponent } from './views/profile/profile.component';
import { HomeGroupComponent } from './views/group/home-group/home-group.component';
import { ExploreGroupComponent } from './views/group/explore-group/explore-group.component';
import { NewGroupComponent } from './views/group/new-group/new-group.component';
import { DetailGroupComponent } from './views/group/detail-group/detail-group.component';
import { HomeRoadmapComponent } from './views/roadmap/home-roadmap/home-roadmap.component';
import { DetailRoadmapComponent } from './views/roadmap/detail-roadmap/detail-roadmap.component';
import { ListRoadmapComponent } from './views/roadmap/list-roadmap/list-roadmap.component';
import { NewRoadmapComponent } from './views/roadmap/new-roadmap/new-roadmap.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'groups', component: HomeGroupComponent, },
  { path: 'groups/explore', component: ExploreGroupComponent },
  { path: 'groups/new', component: NewGroupComponent },
  { path: 'groups/edit/:token', component: NewGroupComponent },
  { path: 'groups/:token', component: DetailGroupComponent },
  { path: 'roadmap', component: HomeRoadmapComponent, },
  { path: 'roadmap/list', component: ListRoadmapComponent },
  { path: 'roadmap/new', component: NewRoadmapComponent },
  { path: 'roadmap/new/:mode', component: NewRoadmapComponent },
  { path: 'roadmap/:token', component: DetailRoadmapComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
