import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Property } from '../entities/property';
import { firestore } from 'firebase';
import { FirebaseApp } from '@angular/fire';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {

  firestore = firestore();
  properties: Array<any>;
  property: Property = new Property();

  constructor(private db: AngularFirestore) { }

  createProperty(value) {
    return new Promise<any>((resolve, reject) => {
      this.db.collection('properties').add({
        name: value.name,
        description: value.description,
        address: value.address,
        town: value.town,
        postcode: value.postcode,
        bathroomCount: value.bathroomCount,
        bedroomCount: value.bedroomCount,
        furnished: value.furnished,
        rent: value.rent,
        averageBills: value.averageBills,
      })
        .then(res => {
          console.log('done')
        })
        .catch(err => {
          console.log(err)
        })
    });
  }

  readProperties(): Observable<Property[]> {
    return this.db.collection<Property>('properties').snapshotChanges().pipe(map(properties => {
      return properties.map(a => {
        const data = a.payload.doc.data() as Property;
        const id = a.payload.doc.id;
        return { id, ... data };
      });
    }));
  }

  getSpecificProperty(listingID): Observable<Property> {
    return this.db.collection('properties').doc(listingID).snapshotChanges().pipe(map(property => {
      const data = property.payload.data() as Property;
      const id = property.payload.id;
      return { id, ... data };
    }));
  }

  updateProperty(listingID, value) {
    return this.db.collection('properties').doc(listingID).set(value);
  }

  favouriteProperty(userId, propertyId) {

    // First we check if this user has favourited anything before
    this.db.collection('userInteraction').doc(userId).get()
      .subscribe(res => {
        if (res.exists) {
          return this.db.collection('userInteraction').doc(userId).update(
            { content: firestore.FieldValue.arrayUnion(propertyId) }
          );
        } else {
          return this.db.collection('userInteraction').doc(userId).set(
            { content: firestore.FieldValue.arrayUnion(propertyId) }
          );
        }
      },
        err => {
          return null;
        });
  }

  unFavouriteProperty(userId, propertyId) {
    return this.db.collection('userInteraction').doc(userId).update(
      { content: firestore.FieldValue.arrayRemove(propertyId) }
    );
  }

  getPropertyFavouriteState(userId) {
    return this.db.collection('userInteraction').doc(userId).get();
  }

}