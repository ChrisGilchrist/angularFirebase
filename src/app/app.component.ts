import { Component } from '@angular/core';
import { faThLarge, faSearch, faHeart, faUsers, faCog } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private authService: AuthService) {

  }


  faThLarge = faThLarge;
  faSearch = faSearch;
  faHeart = faHeart;
  faUsers = faUsers;
  faCog = faCog;
}
