import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, throwToolbarMixedModesError } from '@angular/material';
import { faTimes, faCheck, faHeart } from '@fortawesome/free-solid-svg-icons';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FirebaseService } from '../services/firebase.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-list-item-dialog',
  templateUrl: './list-item-dialog.component.html',
  styleUrls: ['./list-item-dialog.component.scss']
})
export class ListItemDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ListItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public property: any,
    private firebaseService: FirebaseService, private authService: AuthService) {
  }

  showOverview = true;
  showAmmen = false;
  showLocation = false;

  faTimes = faTimes;
  faCheck = faCheck;
  faHeart = faHeart;

  favouriteState: boolean;

  appliances = ['', '', '', '', '', '', ''];
  bathroom = ['', '', ''];

  userId: string;
  propertyId: string;

  ngOnInit() {

    // Get the user id
    this.userId = this.authService.userDetails.uid;
    // Get the property id
    this.propertyId = this.property.property.id;

    // Get the current favourite state of the property for this user
    this.firebaseService.getPropertyFavouriteState(this.userId)
      .subscribe(res => {
       // if the id is in this list then its true else its false
        res.data().content.forEach(propertyId => {
          if (propertyId === this.propertyId) {
            this.favouriteState = true;
          }
        });
      })
  }

  /* Uto handle which tab is open */
  public toggleTabs(type) {

    switch (type) {

      case 'over':
        this.showOverview = true;
        this.showAmmen = false;
        this.showLocation = false;
        break;

      case 'ammen':
        this.showOverview = false;
        this.showAmmen = true;
        this.showLocation = false;
        break;
    }
  }

  favouriteToggle() {
    this.favouriteState = !this.favouriteState;

    // We only want to add it to the list if it is true
    if (!this.favouriteState) {
      this.firebaseService.unFavouriteProperty(this.userId, this.propertyId)
        .then(res => {
          console.log('done')
        })
        .catch(err => {

        });
    } else {
      this.firebaseService.favouriteProperty(this.userId, this.propertyId);
    }


  }

}
