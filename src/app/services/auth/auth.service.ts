import { Injectable } from '@angular/core';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth = getAuth();
  provider = new GoogleAuthProvider();
  // constructor(private auth: Auth) {}
  SignInWithGoogle() {
    console.log("google");
    signInWithPopup(this.auth, this.provider)
      .then((result) => {
        console.log("result" + result);
        
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        console.log("error" + error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  signOut() {
    signOut(this.auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
}
