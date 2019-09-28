import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    user: User;

    constructor(public afAuth: AngularFireAuth, public router: Router) {

        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.user = user;
                localStorage.setItem('user', JSON.stringify(this.user));
            } else {
                localStorage.setItem('user', null);
            }
        })

    }

    /* Register with email and password */
    public async registerWithEmail(email: string, password: string, username: string) {
        try {
            console.log(email, password, username)
            await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(user => {
                user.user.updateProfile({
                    displayName: username
                })
                this.router.navigate(['/home']);
            });
        } catch (e) {
            alert("Error!" + e.message);
        }
    }

    /* Login using email and password */
    public async loginWithEmail(email: string, password: string) {
        try {
            await this.afAuth.auth.signInWithEmailAndPassword(email, password)
            this.router.navigate(['/home']);
        } catch (e) {
            alert("Error!" + e.message);
        }
    }

    /* Create the pop up window for Facebook Authentication */
    public loginWithFacebook() {
        return this.AuthLogin(new auth.FacebookAuthProvider());
        
    }

    /* Create the pop up window for Google Authentication */
    public loginWithGoogle() {
        return this.AuthLogin(new auth.GoogleAuthProvider());
    }

     /* Create the pop up window for Twitter Authentication */
     public loginWithTwitter() {
        return this.AuthLogin(new auth.TwitterAuthProvider());
    }

    /* Login using a external provider such as Google, Facebook etc... */
    public AuthLogin(provider) {
        return this.afAuth.auth.signInWithPopup(provider)
        .then(res => {
            this.router.navigate(['/home']);
        }).catch(err => {
            console.log(err);
        });
    }

    /* Log the user out */
    public async logout(){
        await this.afAuth.auth.signOut();
        localStorage.removeItem('user');
        this.router.navigate(['/home']);
    }

    /* Returns boolean whether the user is logged in or not */
    public get isLoggedIn(): boolean {
        const  user  =  JSON.parse(localStorage.getItem('user'));
        return  user  !==  null;
    }

    /* Returns a User object containing all the user's details */
    public get userDetails(): User {
        const  user  =  JSON.parse(localStorage.getItem('user'));
        return  user;
    }
}