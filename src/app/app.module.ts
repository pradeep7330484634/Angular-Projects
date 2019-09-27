import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from './service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomeColorDirective } from './directives/custome-color.directive';
import { RemoveHashPipe } from './pipes/remove-hash.pipe';

@NgModule({
  declarations: [
    // components, pipes, directives etc.
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CustomeColorDirective,
    RemoveHashPipe
  ],
  imports: [
    // inbuild and third libra
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule, // forms
    HttpClientModule, // http opereraions
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    // service files
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
