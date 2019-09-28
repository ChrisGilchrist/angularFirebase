import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.scss']
})
export class CommunitiesComponent implements OnInit {

  loggedIn = false;
  userId: string;

  constructor(private firebaseService: FirebaseService, private authService: AuthService) { }

  ngOnInit() {

    if (this.authService.isLoggedIn) {
      this.userId = this.authService.userDetails.uid;
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }

  }

}
