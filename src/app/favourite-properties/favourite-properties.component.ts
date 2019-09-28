import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { AuthService } from '../services/auth.service';
import { Property } from '../entities/property';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ListItemDialogComponent } from '../list-item-dialog/list-item-dialog.component';

@Component({
  selector: 'app-favourite-properties',
  templateUrl: './favourite-properties.component.html',
  styleUrls: ['./favourite-properties.component.scss']
})
export class FavouritePropertiesComponent implements OnInit {

  loggedIn = false;
  userId: string;
  properties: Array<Property> = [];

  constructor(private dialog: MatDialog, private firebaseService: FirebaseService, private authService: AuthService) { }

  ngOnInit() {

    if (this.authService.isLoggedIn) {
      this.userId = this.authService.userDetails.uid;
      this.loggedIn = true;
      this.loadData();
    } else {
      this.loggedIn = false;
    }


  }

  loadData() {
    // Get the current favourite state of the property for this user
    this.firebaseService.getPropertyFavouriteState(this.userId)
      .subscribe(res => {
        // if the id is in this list then its true else its false
        res.data().content.forEach(propertyId => {

          this.firebaseService.getSpecificProperty(propertyId)
            .subscribe(property => {
              this.properties.push(property);
            });

        });
      })
    err => {
      console.log(err);
    }
  }

  public openDialog(propertySelected: Property) {

    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.minHeight = '650px';
    dialogConfig.minWidth = '60%';
    dialogConfig.data = {
      property: propertySelected
    }

    this.dialog.open(ListItemDialogComponent, dialogConfig);
  }

}
