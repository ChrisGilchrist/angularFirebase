import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-editor',
  templateUrl: './property-editor.component.html',
  styleUrls: ['./property-editor.component.scss']
})
export class LettingEditorComponent implements OnInit {

  constructor(private fb: FormBuilder, private firebaseService: FirebaseService,
    private route: ActivatedRoute) { }

  form = this.fb.group({
    'name': '',
    'description': '',
    'accomodationType': '',
    'address': '',
    'town': '',
    'postcode': '',
    'bathroomCount': '',
    'bedroomCount': '',
    'furnished': '',
    'rent': '',
    'weeklyCost': '',
    'averageBills': '',

    // Ammentities section of form

  })

  adding = true;

  listingID: any;
  listingAdvert: any;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.listingID = params.get("listingID");

      if (this.listingID) {
        this.adding = false;
        this.loadData();
      } else {
        this.adding = true;
      }
    });
  }

  public loadData() {
    this.firebaseService.getSpecificProperty(this.listingID)
    .subscribe(res => {
      console.log(res);
      this.listingAdvert = res;
    });
  }

  public pushDataToEditor() {
    this.form.patchValue(this.listingAdvert);
  }


  public onSubmit() {
    console.log(this.form.value)
    this.firebaseService.createProperty(this.form.value)
      .then(res => {
        /* Do Something maybe, as it has worked */
      })
      .catch(err => {
        /* Do something maybe like display message, as it didn't work */
      })
  }
}
