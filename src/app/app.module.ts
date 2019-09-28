import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowseComponent } from './browse/browse.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { ListItemComponent } from './list-item/list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ListItemDialogComponent } from './list-item-dialog/list-item-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// Firebase Config
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { LettingEditorComponent } from './property-editor/property-editor.component';
import { FirebaseService } from './services/firebase.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { PageUnknownComponent } from './page-unknown/page-unknown.component';
import { FavouritePropertiesComponent } from './favourite-properties/favourite-properties.component';
import { SettingsComponent } from './settings/settings.component';
import { CommunitiesComponent } from './communities/communities.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    HomeComponent,
    ListItemComponent,
    ListItemDialogComponent,
    LettingEditorComponent,
    LoginComponent,
    PageUnknownComponent,
    FavouritePropertiesComponent,
    SettingsComponent, 
    CommunitiesComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [FirebaseService, AuthService, AngularFireAuth],
  bootstrap: [AppComponent],
  entryComponents: [ListItemDialogComponent]
})
export class AppModule { }
