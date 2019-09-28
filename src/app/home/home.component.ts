import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ListItemDialogComponent } from '../list-item-dialog/list-item-dialog.component';
import { FirebaseService } from '../services/firebase.service';
import { Property } from '../entities/property';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog, private firebaseService: FirebaseService) { }
  
  realResults: Observable<Property[]>;
  filterOptions = ['Houses', 'Flats', 'Apartments', 'Studios'];

  locations = [ 
    {location: 'London', noOfProperties: 6},
    {location: 'Plymouth', noOfProperties: 12},
    {location: 'Liverpool', noOfProperties: 4},
    {location: 'Cardiff', noOfProperties: 18}
  ]

  ngOnInit() {
    this.loadRecentProperties();
  }

  public loadRecentProperties() {

    this.realResults = this.firebaseService.readProperties();
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
