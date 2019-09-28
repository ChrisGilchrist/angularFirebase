import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  constructor() { }

  results = [
    { name: 'House1', location: 'Plymouth', description: 'Hi! Looking for a fourth person to live with 3 other girls in Guildford.', creationDate: '15 hours ago'},
    { name: 'House2', location: 'Plymouth', description: 'Hi! Looking for a fourth person to live with 3 other girls in Guildford.', creationDate: '15 hours ago'},
    { name: 'House3', location: 'Plymouth', description: 'Hi! Looking for a fourth person to live with 3 other girls in Guildford.', creationDate: '15 hours ago'},
    { name: 'House4', location: 'Plymouth', description: 'Hi! Looking for a fourth person to live with 3 other girls in Guildford.', creationDate: '15 hours ago'},
    { name: 'House5', location: 'Plymouth', description: 'Hi! Looking for a fourth person to live with 3 other girls in Guildford.', creationDate: '15 hours ago'},
    { name: 'House6', location: 'Plymouth', description: 'Hi! Looking for a fourth person to live with 3 other girls in Guildford.', creationDate: '15 hours ago'}
  ]

  faCoffee = faCoffee;

  ngOnInit() {
  }

}
