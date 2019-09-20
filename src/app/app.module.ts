import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { HeaderComponent } from './header/header.component';

var config = {
    apiKey: "AIzaSyAXgo6VtTYTDrFp9DLbVuGU2dc41iY4sw0",
    authDomain: "angular-forms-11d6e.firebaseapp.com",
    databaseURL: "https://angular-forms-11d6e.firebaseio.com",
    projectId: "angular-forms-11d6e",
    storageBucket: "",
    messagingSenderId: "865134488044",
    appId: "1:865134488044:web:f98d39d3761903dd3638c9"
  };
  
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
