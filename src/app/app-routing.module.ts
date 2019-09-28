import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { HomeComponent } from './home/home.component';
import { LettingEditorComponent } from './property-editor/property-editor.component';
import { LoginComponent } from './login/login.component';
import { PageUnknownComponent } from './page-unknown/page-unknown.component';
import { FavouritePropertiesComponent } from './favourite-properties/favourite-properties.component';
import { SettingsComponent } from './settings/settings.component';
import { CommunitiesComponent } from './communities/communities.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'fav' , component: FavouritePropertiesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'communities', component: CommunitiesComponent },
  { path: 'add', component: LettingEditorComponent },
  { path: 'edit/:listingID', component: LettingEditorComponent },

  // Unknown redirect page
  { path: '404', component: PageUnknownComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
